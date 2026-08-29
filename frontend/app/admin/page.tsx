import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';
import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <AdminLogin />
      </div>
    );
  }

  // Fetch contacts
  let contacts = [];
  try {
    const filePath = path.join(process.cwd(), 'contacts.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    contacts = JSON.parse(fileData);
  } catch (e) {
    console.error('Error reading contacts.json:', e);
  }

  return (
    <div className="min-h-screen bg-surface p-6 md:p-12">
      <AdminDashboard contacts={contacts} />
    </div>
  );
}
