import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import AdminDashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import AdminStatistics from "./Statistics";
import CategoryManagement from "./CategoryManagement";

interface AdminWrapperProps {
  page: string;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <AdminDashboard />;
      case "users":
        return <UserManagement />;
      case "products":
        return <ProductManagement />;
      case "orders":
        return <OrderManagement />;
      case "categories":
        return <CategoryManagement />;
      case "stats":
        return <AdminStatistics />;
      default:
        return <AdminDashboard />;
    }
  };

  return <AdminLayout>{renderPage()}</AdminLayout>;
};

export default AdminWrapper;
