import { useState } from "react";
import { AuthResponse, User } from "@/shared/interfaces/auth.interface";

export function useAuth() {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));

  const login = (authResponse: AuthResponse) => {
    localStorage.setItem("accessToken", authResponse.accessToken);
    localStorage.setItem("refreshToken", authResponse.refreshToken);
    localStorage.setItem("user", JSON.stringify(authResponse.user));
    setUser(authResponse.user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, login, logout };
}
