import { createContext, useContext, useMemo } from "react";

const publicAuth = {
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  setAuthError: () => {},
  logout: async () => {},
  navigateToLogin: () => { window.location.href = "/"; },
};

const AuthContext = createContext(publicAuth);

export function AuthProvider({ children }) {
  const value = useMemo(() => publicAuth, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext) || publicAuth;
}
