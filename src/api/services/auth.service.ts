import axiosInstance from "../config/axios";
import type { User } from "../../types/user.types";
import type {
  LoginCredentials,
  RegisterData,
  UpdateProfileData,
  UpdatePasswordData,
  UpdateAvatarResponse,
} from "../../types/auth.types";

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  },

  logout: async () => {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await axiosInstance.get("/auth/profile");
    return response.data.data;
  },

  updateProfile: async (data: UpdateProfileData): Promise<User> => {
    const response = await axiosInstance.put("/auth/profile", data);
    return response.data;
  },

  updatePassword: async (
    data: UpdatePasswordData
  ): Promise<{ message: string }> => {
    const response = await axiosInstance.put("/auth/password", data);
    return response.data;
  },

  updateAvatar: async (file: File): Promise<UpdateAvatarResponse> => {
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await axiosInstance.put("/auth/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
