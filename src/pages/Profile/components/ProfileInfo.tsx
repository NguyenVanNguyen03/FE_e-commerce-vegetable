import type { UpdateProfileData } from "../../../types/auth.types";
import type { User } from "../../../types/user.types";
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface ProfileInfoProps {
  user: User | null;
  profile: UpdateProfileData;
  loading: boolean;
  isEditingProfile: boolean;
  setIsEditingProfile: (editing: boolean) => void;
  handleProfileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileSubmit: (e: React.FormEvent) => Promise<void>;
  // Optionally add a way to reset profile state on cancel if needed
  // resetProfileState: () => void;
}

export default function ProfileInfo({
  user,
  profile,
  loading,
  isEditingProfile,
  setIsEditingProfile,
  handleProfileChange,
  handleProfileSubmit,
}: ProfileInfoProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {!isEditingProfile ? (
        /* Display as Text */
        <div className="space-y-4">
          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label className="block text-gray-600 font-semibold mb-1">
              Full Name:
            </label>
            <p className="text-gray-800 text-lg ml-5">{user?.name || "N/A"}</p>
          </div>
          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label className="block text-gray-600 font-semibold mb-1">
              Email Address:
            </label>
            <p className="text-gray-800 text-lg ml-5">{user?.email || "N/A"}</p>
          </div>
          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label className="block text-gray-600 font-semibold mb-1">
              Phone:
            </label>
            <p className="text-gray-800 text-lg ml-5">{user?.phone || "N/A"}</p>
          </div>
          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label className="block text-gray-600 font-semibold mb-1">
              Address:
            </label>
            <p className="text-gray-800 text-lg ml-5">
              {user?.address || "N/A"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsEditingProfile(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#7EB693] hover:bg-[#5a9b7b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7EB693] transition-all"
          >
            <FaEdit className="-ml-1 mr-2 h-4 w-4" />
            Update Profile Here
          </button>
        </div>
      ) : (
        /* Display as Form */
        <form
          onSubmit={handleProfileSubmit}
          className="space-y-6 animate-fade-in"
        >
          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaUser className="w-5 h-5" />
              </span>
              <input
                id="name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                disabled={loading}
                maxLength={50}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <input
                id="email"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                disabled={loading}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaPhone className="w-5 h-5" />
              </span>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={profile.phone || ""}
                onChange={handleProfileChange}
                disabled={loading}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5" />
              </span>
              <input
                id="address"
                type="text"
                name="address"
                value={profile.address || ""}
                onChange={handleProfileChange}
                disabled={loading}
                maxLength={200}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#274C5B] text-white py-2 rounded-lg font-semibold hover:bg-[#1a3643] transition-all disabled:opacity-50 shadow-md"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin mr-2">⟳</span>
                  Updating...
                </span>
              ) : (
                "Update Profile"
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsEditingProfile(false)}
              disabled={loading}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-all disabled:opacity-50 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
