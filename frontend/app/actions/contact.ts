'use server';

import { supabase } from '@/lib/supabase';
import { headers } from 'next/headers';

// Simple in-memory rate limiter (resets on lambda cold start, but provides good baseline protection)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export async function submitContactForm(prevState: { success: boolean; message: string }, formData: FormData) {
  try {
    // 1. Honeypot Check: If the hidden 'website' field is filled out, it's a bot.
    if (formData.get('website')) {
      console.log('Bot detected via honeypot');
      // Return success to fool the bot without hitting the database
      return { success: true, message: 'Thank you! Our team will contact you soon.' };
    }

    // 2. IP Rate Limiting Check
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown-ip';
    const now = Date.now();

    if (ip !== 'unknown-ip') {
      const userRate = rateLimitMap.get(ip);
      
      if (userRate) {
        if (now - userRate.timestamp < RATE_LIMIT_WINDOW_MS) {
          if (userRate.count >= MAX_REQUESTS_PER_WINDOW) {
            console.warn(`Rate limit exceeded for IP: ${ip}`);
            return { success: false, message: 'Too many requests. Please wait a minute before trying again.' };
          }
          userRate.count += 1;
        } else {
          // Reset window after 1 minute
          rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    }

    const service = (formData.get('service') as string) || '';
    const enquiryType = (formData.get('enquiryType') as string) || '';
    const city = (formData.get('city') as string) || '';
    const stateVal = (formData.get('state') as string) || '';
    const zip = (formData.get('zip') as string) || '';
    const rawMessage = (formData.get('message') as string) || (formData.get('project') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';

    const messageWithMeta = [
      service ? `[Selected Service: ${service}]` : '',
      enquiryType ? `[Enquiry Type: ${enquiryType}]` : '',
      city || stateVal || zip ? `[Location: ${[city, stateVal, zip].filter(Boolean).join(', ')}]` : '',
      rawMessage
    ].filter(Boolean).join('\n\n');

    const data = {
      name: (formData.get('name') as string) || '',
      company: (formData.get('company') as string) || (city ? `${city}${stateVal ? `, ${stateVal}` : ''}` : ''),
      email: email,
      phone: phone,
      project: messageWithMeta || rawMessage,
    };

    // Simulate a network delay for the dummy form to feel real
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Save to local file so admin can see it
    const fs = await import('fs/promises');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'contacts.json');
    
    let existingContacts = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      existingContacts = JSON.parse(fileData);
    } catch {
      // File doesn't exist yet, that's fine
    }

    const newContact = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    // 1. Save to Supabase (now that it's online)
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([data]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
    } else {
      console.log('Saved contact to Supabase successfully.');
    }

    // 2. Also save to local JSON file so the Admin Dashboard still works
    existingContacts.unshift(newContact); // Add to top
    await fs.writeFile(filePath, JSON.stringify(existingContacts, null, 2));

    return { success: true, message: 'Thank you! Our team will contact you soon.' };
  } catch (error) {
    console.error('Server action error:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
