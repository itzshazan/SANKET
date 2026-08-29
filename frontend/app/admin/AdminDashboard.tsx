"use client";

import { logoutAdmin } from "../actions/admin";
import { Button } from "@/components/ui/Button";

type Contact = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  project: string;
  createdAt: string;
};

export function AdminDashboard({ contacts }: { contacts: Contact[] }) {
  
  const handleLogout = async () => {
    await logoutAdmin();
    window.location.reload();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inquiries Dashboard</h1>
          <p className="text-muted mt-1">Manage contact form submissions ({contacts.length})</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-20 bg-white border border-border rounded-lg">
          <p className="text-muted text-lg">No inquiries received yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white border border-border p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{contact.name}</h3>
                  <p className="text-primary font-medium">{contact.company}</p>
                </div>
                <div className="text-sm text-muted bg-background px-3 py-1 rounded-full border border-border self-start">
                  {new Date(contact.createdAt).toLocaleString()}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-muted block mb-1">Email</span>
                  <a href={`mailto:${contact.email}`} className="text-foreground font-medium hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-muted block mb-1">Phone</span>
                  {contact.phone ? (
                    <a href={`tel:${contact.phone}`} className="text-foreground font-medium hover:text-primary transition-colors">
                      {contact.phone}
                    </a>
                  ) : (
                    <span className="text-foreground italic">Not provided</span>
                  )}
                </div>
              </div>

              <div className="bg-background p-4 rounded border border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">Project Description</span>
                <p className="text-foreground text-sm whitespace-pre-wrap leading-relaxed">
                  {contact.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
