import { useEffect } from "react";
import type { ComponentType } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer, Header } from "../layouts";
import Cart from "../components/Cart";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ShopSingle from "../pages/ShopSingle";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { Login, Register } from "../pages/Auth";
import CartPage from "../pages/Cart";
import Orders from "../pages/Orders";
import Categories from "../pages/Categories";
import Admin from "../pages/Admin";
import screenUrl from "../constants/screenUrls";

interface PageWrapperProps {
  title: string;
  component: ComponentType;
  isHeader: boolean;
  isFooter: boolean;
}

const publicRouters = [
  {
    path: screenUrl.HOME,
    component: Home,
    title: "Shop Veggio",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.PROFILE,
    component: Profile,
    title: "Profile",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.ABOUT,
    component: About,
    title: "About",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.SHOP,
    component: Shop,
    title: "Shop",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.SHOP_SINGLE,
    component: ShopSingle,
    title: "Shop Single",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.CONTACT,
    component: Contact,
    title: "Contact",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.NOT_FOUND,
    component: NotFound,
    title: "Not Found",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.LOGIN,
    component: Login,
    title: "Login",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.REGISTER,
    component: Register,
    title: "Register",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.CART,
    component: CartPage,
    title: "Cart",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.ORDERS,
    component: Orders,
    title: "Orders",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.CATEGORIES,
    component: Categories,
    title: "Categories",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.ADMIN,
    component: () => <Admin page="dashboard" />,
    title: "Admin Dashboard",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.ADMIN_USERS,
    component: () => <Admin page="users" />,
    title: "Admin Users",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.ADMIN_PRODUCTS,
    component: () => <Admin page="products" />,
    title: "Admin Products",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.ADMIN_CATEGORIES,
    component: () => <Admin page="categories" />,
    title: "Admin Categories",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.ADMIN_ORDERS,
    component: () => <Admin page="orders" />,
    title: "Admin Orders",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.ADMIN_STATS,
    component: () => <Admin page="stats" />,
    title: "Admin Statistics",
    isHeader: false,
    isFooter: false,
  },
  {
    path: screenUrl.PROFILE,
    component: Profile,
    title: "Profile",
    isHeader: true,
    isFooter: true,
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function WrapperComponent({
  title,
  component: Component,
  isHeader,
  isFooter,
}: PageWrapperProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {isHeader && <Header />}
      <main className="flex-grow">
        <Component />
      </main>
      {isFooter && <Footer />}
      <Cart />
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {publicRouters.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <WrapperComponent
                title={route.title}
                component={route.component as ComponentType}
                isHeader={route.isHeader}
                isFooter={route.isFooter}
              />
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
