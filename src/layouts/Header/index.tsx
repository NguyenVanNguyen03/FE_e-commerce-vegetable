import { useState } from "react";
import {
  Logo,
  SearchBar,
  CartButton,
  AuthButtons,
  Navigation,
} from "../../components";
import type { NavItem } from "./components/Navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const { isLoggedIn, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Dynamic navigation links based on user role
  const getNavLinks = (): NavItem[] => {
    const baseLinks: NavItem[] = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      // {
      //   label: "Pages",
      //   href: "#",
      //   submenu: [
      //     { label: "Subpage 1", href: "#" },
      //     { label: "Subpage 2", href: "#" },
      //   ],
      // },
      { label: "Shop", href: "/shop" },
      { label: "Categories", href: "/categories" },
      { label: "Contact", href: "/contact" },
      // { label: "News", href: "#" },
    ];

    return baseLinks;
  };

  const handleCloseMenu = () => {
    setOpen(false);
    setOpenMobileSubmenu(null);
  };

  return (
    <header className="sticky top-0 bg-white w-full flex flex-col xl:flex-row items-center justify-between px-4 xl:px-16 py-4 xl:py-6 shadow-sm z-50 animate-fade-in">
      {/* Logo + Hamburger */}
      <div className="flex items-center gap-2 w-full xl:w-auto justify-between hover-scale">
        <a
          href="/"
          className="flex items-center gap-2 transition-all hover:opacity-80"
        >
          <span className="inline-block w-8 h-8 rounded-full border-2 border-green-300 flex items-center justify-center animate-pulse">
            <Logo size={28} />
          </span>
          <span className="text-2xl font-bold text-[#274C5B]">Veggio</span>
        </a>
        {/* Hamburger icon chỉ hiện trên mobile */}
        {!open && (
          <button
            className="ml-2 lg:hidden z-50 relative"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7 text-[#274C5B]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      <Navigation navLinks={getNavLinks()} className="animate-slide-in-right" />

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden animate-slide-in-bottom">
          <div className="relative pt-24 pb-6 px-4 h-full">
            <button
              className="absolute top-4 right-4 p-2 z-50 bg-white border border-gray-200 rounded-full shadow"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7 text-[#274C5B]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Navigation
              navLinks={getNavLinks()}
              isMobile
              openMobileSubmenu={openMobileSubmenu}
              onToggleMobileSubmenu={setOpenMobileSubmenu}
            />
          </div>
        </div>
      )}

      {/* Search & Cart & Auth */}
      <div className="flex items-center gap-4 mt-4 xl:mt-0 w-full xl:w-auto justify-end stagger-children">
        <div className="hidden xl:block">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2">
          <CartButton />
          <AuthButtons
            isLoggedIn={isLoggedIn}
            onLogout={logout}
            showUserMenu={showUserMenu}
            onToggleUserMenu={() => setShowUserMenu(!showUserMenu)}
          />
        </div>
      </div>

      {/* Mobile Search (shown in mobile menu) */}
      {open && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t hidden lg:block z-40 animate-slide-in-bottom">
          <SearchBar />
        </div>
      )}
    </header>
  );
}
