export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "HR" | "EMPLOYEE";
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
