export interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

interface NavigationProps {
  navLinks: NavItem[];
  isMobile?: boolean;
  openMobileSubmenu?: string | null;
  onToggleMobileSubmenu?: (label: string | null) => void;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  navLinks,
  isMobile = false,
  openMobileSubmenu,
  onToggleMobileSubmenu,
  className = "",
}) => {
  if (isMobile) {
    return (
      <nav
        className={`w-full h-full bg-white flex flex-col items-center pt-8 gap-6 text-[#274C5B] font-semibold lg:hidden overflow-y-auto ${className}`}
      >
        {navLinks.map((item) =>
          item.submenu ? (
            <div key={item.label} className="flex flex-col items-center">
              <button
                className="text-xl font-semibold flex items-center gap-1 focus:outline-none"
                onClick={() =>
                  onToggleMobileSubmenu?.(
                    openMobileSubmenu === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <svg
                  className={`w-3 h-3 ml-1 ${
                    openMobileSubmenu === item.label ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openMobileSubmenu === item.label && (
                <div className="flex flex-col gap-1 mt-1">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="hover:text-green-600 text-base pl-4"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-green-600 text-xl"
            >
              {item.label}
            </a>
          )
        )}
      </nav>
    );
  }

  return (
    <nav
      className={`hidden lg:flex gap-8 text-[#274C5B] font-semibold ml-8 ${className}`}
    >
      {navLinks.map((item) =>
        item.submenu ? (
          <div className="relative group" key={item.label}>
            <button className="hover:text-green-600 flex items-center">
              {item.label}
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 w-32 bg-white border border-gray rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
              {item.submenu.map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600"
                >
                  {sub.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a key={item.label} href={item.href} className="hover:text-green-600">
            {item.label}
          </a>
        )
      )}
    </nav>
  );
};

export default Navigation;
