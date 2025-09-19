import { useState, useEffect } from "react";
import type { UpdateProfileData } from "../../types/auth.types";
import { authService } from "../../api/services/auth.service";
import { toast } from "react-toastify";
import type { User, PasswordState } from "../../types/user.types";

import ProfileInfo from "./components/ProfileInfo";
import ChangePassword from "./components/ChangePassword";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs"; // Import ProfileTabs component

type TabType = "profile" | "password";

// Define a local type for password state including confirmNewPassword
// Moved to user.types.ts

export default function Profile() {
  const [profile, setProfile] = useState<UpdateProfileData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [password, setPassword] = useState<PasswordState>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);
      setProfile({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    } catch (error) {
      setError("Failed to load profile");
      toast.error("Failed to load profile");
    } finally {
      // After loading profile, reset editing state to false
      setIsEditingProfile(false);
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const updatedUser = await authService.updateProfile(profile);
      setUser(updatedUser);
      // Reload profile data after successful update
      loadProfile();
      setSuccess("Profile updated successfully");
      toast.success("Profile updated successfully");
      setIsEditingProfile(false); // Exit edit mode on success
    } catch (error) {
      setError("Failed to update profile");
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    if (password.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password.newPassword !== password.confirmNewPassword) {
      setError("New password and confirm password do not match");
      toast.error("New password and confirm password do not match");
      return;
    }

    setLoading(true);
    try {
      // Only send necessary fields to the API
      await authService.updatePassword({
        currentPassword: password.currentPassword,
        newPassword: password.newPassword,
      });
      setSuccess("Password updated successfully");
      toast.success("Password updated successfully");
      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }); // Reset password fields
    } catch (error) {
      setError("Failed to update password");
      toast.error("Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      toast.error("Please upload an image file");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image size should be less than 2MB");
      toast.error("Image size should be less than 2MB");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await authService.updateAvatar(file);
      // Reload profile data to ensure avatar display is updated
      loadProfile();
      setSuccess("Avatar updated successfully");
      toast.success("Avatar updated successfully");
    } catch (error) {
      setError("Failed to update avatar");
      toast.error("Failed to update avatar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen animate-fade-in">
      {/* Optional: Add your Banner component here if desired */}
      {/* <Banner title="My Profile" image={banner} /> */}

      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 animate-fade-in">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 animate-fade-in">
            {success}
          </div>
        )}

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Profile Header Component */}
          <ProfileHeader
            user={user}
            loading={loading}
            handleAvatarChange={handleAvatarChange}
          />

          {/* Profile Content */}
          <div className="pt-20 px-8 pb-8">
            {/* Profile Tabs Component */}
            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "profile" ? (
              <div className="animate-fade-in">
                <ProfileInfo
                  user={user}
                  profile={profile}
                  loading={loading}
                  isEditingProfile={isEditingProfile}
                  setIsEditingProfile={setIsEditingProfile}
                  handleProfileChange={handleProfileChange}
                  handleProfileSubmit={handleProfileSubmit}
                />
              </div>
            ) : (
              <div className="animate-fade-in">
                <ChangePassword
                  password={password}
                  loading={loading}
                  handlePasswordChange={handlePasswordChange}
                  handlePasswordSubmit={handlePasswordSubmit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
