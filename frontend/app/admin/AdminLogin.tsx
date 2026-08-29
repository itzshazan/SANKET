"use client";

import { useActionState, useEffect } from "react";
import { loginAdmin } from "../actions/admin";
import { Button } from "@/components/ui/Button";

export function AdminLogin() {
  const [state, formAction, isPending] = useActionState(loginAdmin, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      window.location.reload();
    }
  }, [state.success]);

  return (
    <div className="w-full max-w-md bg-white border border-border p-8 rounded-lg shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
        <p className="text-sm text-muted mt-2">Sign in to view inquiries</p>
      </div>

      <form action={formAction} className="space-y-4">
        {!state.success && state.message && (
          <div className="p-3 bg-red-50 text-red-600 rounded text-sm text-center">
            {state.message}
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-bold text-foreground">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-border bg-background focus:outline-none focus:border-primary"
            placeholder="admin@zobique.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-bold text-foreground">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-border bg-background focus:outline-none focus:border-primary"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
}
