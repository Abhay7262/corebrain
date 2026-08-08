import * as React from "react";

import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

type AuthResult = { error: string | null };

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  isSupabaseEnabled: boolean;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (name: string, email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<AuthResult>;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

const DEMO_SESSION_KEY = "corebrain-demo-session";
const DEMO_USERS_KEY = "corebrain-demo-users";

/* ------------------------------ demo helpers ------------------------------ */

type DemoUser = AuthUser & { password: string };

function readDemoUsers(): DemoUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(DEMO_USERS_KEY) ?? "[]") as DemoUser[];
  } catch {
    return [];
  }
}

function writeDemoUsers(users: DemoUser[]) {
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users));
}

function readDemoSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DEMO_SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/* -------------------------------- provider -------------------------------- */

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [loading, setLoading] = React.useState(true);
  const supabase = getSupabaseClient();

  React.useEffect(() => {
    let active = true;

    if (supabase) {
      supabase.auth.getSession().then(({ data }) => {
        if (!active) return;
        const s = data.session;
        setUser(
          s?.user
            ? {
                id: s.user.id,
                email: s.user.email ?? "",
                name:
                  (s.user.user_metadata?.name as string | undefined) ??
                  s.user.email?.split("@")[0] ??
                  "there",
              }
            : null,
        );
        setLoading(false);
      });

      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(
          session?.user
            ? {
                id: session.user.id,
                email: session.user.email ?? "",
                name:
                  (session.user.user_metadata?.name as string | undefined) ??
                  session.user.email?.split("@")[0] ??
                  "there",
              }
            : null,
        );
      });

      return () => {
        active = false;
        sub.subscription.unsubscribe();
      };
    }

    // Demo mode — resolve session from localStorage.
    setUser(readDemoSession());
    setLoading(false);
    return () => {
      active = false;
    };
  }, [supabase]);

  const signIn = React.useCallback<AuthContextValue["signIn"]>(
    async (email, password) => {
      if (supabase) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        return { error: error?.message ?? null };
      }
      await wait(650);
      const found = readDemoUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
      if (!found || found.password !== password) {
        return { error: "Invalid email or password." };
      }
      const session: AuthUser = { id: found.id, email: found.email, name: found.name };
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { error: null };
    },
    [supabase],
  );

  const signUp = React.useCallback<AuthContextValue["signUp"]>(
    async (name, email, password) => {
      if (supabase) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        });
        return { error: error?.message ?? null };
      }
      await wait(750);
      const users = readDemoUsers();
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return { error: "An account with this email already exists." };
      }
      const newUser: DemoUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password,
      };
      writeDemoUsers([...users, newUser]);
      const session: AuthUser = { id: newUser.id, email: newUser.email, name: newUser.name };
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { error: null };
    },
    [supabase],
  );

  const signOut = React.useCallback<AuthContextValue["signOut"]>(async () => {
    if (supabase) {
      await supabase.auth.signOut();
      return;
    }
    localStorage.removeItem(DEMO_SESSION_KEY);
    setUser(null);
  }, [supabase]);

  const resetPassword = React.useCallback<AuthContextValue["resetPassword"]>(
    async (email) => {
      if (supabase) {
        const redirectTo =
          (import.meta.env.VITE_SUPABASE_REDIRECT_URL as string | undefined) ??
          (typeof window !== "undefined" ? `${window.location.origin}/login` : undefined);
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
        return { error: error?.message ?? null };
      }
      await wait(650);
      return { error: null };
    },
    [supabase],
  );

  const value = React.useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      isSupabaseEnabled: isSupabaseConfigured,
      signIn,
      signUp,
      signOut,
      resetPassword,
    }),
    [user, loading, signIn, signUp, signOut, resetPassword],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider.");
  return ctx;
}
