import "./App.css";
import "./index.css";
import "./styles/animations.css";
import { ToastProvider } from "./contexts/ToastContext";
import { CartProvider } from "./contexts/CartContext";
import { AppRouter } from "./router";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <AppRouter />
          </div>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
