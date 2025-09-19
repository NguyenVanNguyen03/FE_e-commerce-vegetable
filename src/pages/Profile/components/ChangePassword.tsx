import type { UpdatePasswordData } from "../../../types/auth.types";
import { FaLock } from "react-icons/fa";

// Define a local type for password state including confirmNewPassword
type PasswordState = UpdatePasswordData & { confirmNewPassword: string };

interface ChangePasswordProps {
  password: PasswordState;
  loading: boolean;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordSubmit: (e: React.FormEvent) => Promise<void>;
}

export default function ChangePassword({
  password,
  loading,
  handlePasswordChange,
  handlePasswordSubmit,
}: ChangePasswordProps) {
  return (
    <form onSubmit={handlePasswordSubmit} className="space-y-6 animate-fade-in">
      <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="currentPassword"
        >
          Current Password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaLock className="w-5 h-5" />
          </span>
          <input
            id="currentPassword"
            type="password"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handlePasswordChange}
            disabled={loading}
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 transition-all"
          />
        </div>
      </div>

      <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="newPassword"
        >
          New Password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaLock className="w-5 h-5" />
          </span>
          <input
            id="newPassword"
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
            disabled={loading}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 transition-all"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Password must be at least 8 characters
        </p>
      </div>

      <div className="hover:bg-gray-50 transition-colors p-2 rounded-lg">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="confirmNewPassword"
        >
          Confirm New Password
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaLock className="w-5 h-5" />
          </span>
          <input
            id="confirmNewPassword"
            type="password"
            name="confirmNewPassword"
            value={password.confirmNewPassword}
            onChange={handlePasswordChange}
            disabled={loading}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7EB693] focus:ring-1 focus:ring-[#7EB693] disabled:opacity-50 transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#274C5B] text-white py-3 rounded-lg font-semibold hover:bg-[#7EB693] transition-all disabled:opacity-50 shadow-md"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <span className="animate-spin mr-2">⟳</span>
            Updating...
          </span>
        ) : (
          "Update Password"
        )}
      </button>
    </form>
  );
}
