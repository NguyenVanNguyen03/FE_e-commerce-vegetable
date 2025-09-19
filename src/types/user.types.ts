import type { UpdatePasswordData } from "./auth.types";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  role: "user" | "admin";
  avatar: {
    url: string;
    public_id: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

// Define a local type for password state including confirmNewPassword
export interface PasswordState extends UpdatePasswordData {
  confirmNewPassword: string;
}
