import React from "react";
import type { User } from "../../../types/user.types";
import { FaCamera } from "react-icons/fa";

interface ProfileHeaderProps {
  user: User | null;
  loading: boolean;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export default function ProfileHeader({
  user,
  loading,
  handleAvatarChange,
}: ProfileHeaderProps) {
  return (
    <div className="relative h-48 bg-[#274C5B]">
      <div className="absolute -bottom-16 left-8">
        <div className="relative group animate-fade-in">
          <img
            src={user?.avatar?.url || "/default-avatar.svg"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg hover:scale-105 transition-transform"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (
                target.src !==
                window.location.origin + "/default-avatar.svg"
              ) {
                target.src = "/default-avatar.svg";
              }
            }}
          />
          <label className="absolute bottom-0 right-0 bg-[#274C5B] text-white p-2 rounded-full cursor-pointer hover:bg-[#7EB693] transition-colors shadow-md">
            <FaCamera className="w-4 h-4" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
              disabled={loading}
            />
          </label>
        </div>
      </div>
      {user && user.createdAt && (
        <div className="absolute bottom-4 right-8 text-white text-right animate-fade-in">
          <p className="text-sm opacity-80">Member since</p>
          <p className="font-semibold">
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
