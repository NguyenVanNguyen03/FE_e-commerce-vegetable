import { Link } from "react-router-dom";
import { UserIcon } from "../../../components";
import { useToast } from "../../../contexts/ToastContext";
import { useAuth } from "../../../contexts/AuthContext";
import { FiUser, FiList, FiLogOut, FiShield } from "react-icons/fi";

interface AuthButtonsProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  showUserMenu: boolean;
  onToggleUserMenu: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  isLoggedIn,
  onLogout,
  showUserMenu,
  onToggleUserMenu,
}) => {
  const { showSuccess } = useToast();
  const { user } = useAuth();

  const handleLogout = () => {
    onLogout();
    showSuccess("Logged out successfully");
  };

  if (isLoggedIn) {
    return (
      <div className="relative ">
        <button
          onClick={onToggleUserMenu}
          className="flex items-center gap-2 border border-gray rounded-full px-4 py-2 hover:shadow transition"
        >
          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
            <UserIcon className="w-5 h-5" />
          </span>
          <span className="text-primary font-semibold">My Account</span>
        </button>

        {showUserMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray/30 ">
            <Link
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 text-black hover:bg-mint border-b hover:text-dark border-gray/60"
              onClick={onToggleUserMenu}
            >
              <FiUser className="w-5 h-5 text-primary" />
              Profile
            </Link>
            <Link
              to="/orders"
              className="flex items-center gap-2 px-4 py-2 text-black hover:bg-mint border-b hover:text-dark border-gray/40"
              onClick={onToggleUserMenu}
            >
              <FiList className="w-5 h-5 text-primary" />
              My Orders
            </Link>
            {/* Admin Panel - Only show for admin users */}
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 text-black hover:bg-mint border-b hover:text-dark border-gray/40"
                onClick={onToggleUserMenu}
              >
                <FiShield className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Admin Panel</span>
              </Link>
            )}
            <button
              onClick={() => {
                handleLogout();
                onToggleUserMenu();
              }}
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:text-dark hover:bg-mint"
            >
              <FiLogOut className="w-5 h-5 text-primary" />
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="text-primary font-semibold hover:text-secondary transition-colors"
      >
        Login
      </Link>
      <span className="text-gray/60">|</span>
      <Link
        to="/register"
        className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-secondary transition-colors"
      >
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
