import React from "react";

interface AdminButtonProps {
  isMobile?: boolean;
  className?: string;
}

const AdminButton: React.FC<AdminButtonProps> = ({
  isMobile = false,
  className = "",
}) => {
  const baseClasses = isMobile
    ? "w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
    : "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl";

  const iconSize = isMobile ? "w-5 h-5" : "w-4 h-4";
  const iconMargin = isMobile ? "mr-2" : "mr-2";

  return (
    <a href="/admin" className={`${baseClasses} ${className}`}>
      <svg
        className={`${iconSize} ${iconMargin}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
      Admin Panel
    </a>
  );
};

export default AdminButton;
