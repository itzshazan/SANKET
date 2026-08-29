'use server';

import { cookies } from 'next/headers';

export async function loginAdmin(prevState: unknown, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    return { success: true, message: 'Logged in successfully' };
  }

  return { success: false, message: 'Invalid credentials' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}
