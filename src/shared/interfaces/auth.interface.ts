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
  role: "ADMIN" | "HR" | "EMPLOYEE";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
