import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../api/services/auth.service";
import type { User } from "../types/user.types";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  setIsLoggedIn: (v: boolean) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      setIsLoggedIn(!!token);

      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("user");
        }
      } else if (token) {
        // Nếu có token nhưng không có user data, gọi API để lấy thông tin user
        try {
          const user = await authService.getCurrentUser();
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Nếu lỗi, có thể token đã hết hạn, xóa token
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }
      }
    };

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, setIsLoggedIn, setUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
