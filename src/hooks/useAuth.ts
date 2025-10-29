import { useEffect, useState } from "react";
import { AuthResponse, User } from "@/shared/interfaces/auth.interface";

class AuthState {
  private user: User | null = null;
  private isAuthenticated: boolean = false;
  private listeners: Set<() => void> = new Set();

  constructor() {
    const storedUser = localStorage.getItem("user");
    this.user = storedUser ? JSON.parse(storedUser) : null;
    this.isAuthenticated = !!localStorage.getItem("accessToken");
  }

  getState() {
    return {
      user: this.user,
      isAuthenticated: this.isAuthenticated,
    };
  }

  login(authResponse: AuthResponse) {
    localStorage.setItem("accessToken", authResponse.accessToken);
    localStorage.setItem("refreshToken", authResponse.refreshToken);
    localStorage.setItem("user", JSON.stringify(authResponse.user));
    this.user = authResponse.user;
    this.isAuthenticated = true;
    this.notify();
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    this.user = null;
    this.isAuthenticated = false;
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }
}

const authInstance = new AuthState();

export function useAuth() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = authInstance.subscribe(() => {
      forceUpdate({});
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const state = authInstance.getState();

  return {
    ...state,
    login: (authResponse: AuthResponse) => authInstance.login(authResponse),
    logout: () => authInstance.logout(),
  };
}
