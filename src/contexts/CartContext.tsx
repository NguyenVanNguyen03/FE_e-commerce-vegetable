import React, { createContext, useContext, useState, useEffect } from "react";
import { cartService, type CartItemDto } from "../api/services/cart.service";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  slug: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    item: Omit<CartItem, "quantity">,
    quantity?: number
  ) => Promise<void> | void;
  removeItem: (id: string) => Promise<void> | void;
  updateQuantity: (id: string, quantity: number) => Promise<void> | void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = !!localStorage.getItem("token");

  const mapDtoToItem = (dto: CartItemDto): CartItem => ({
    id: dto.product._id,
    name: dto.product.name,
    price: dto.product.price,
    quantity: dto.quantity,
    imageUrl: dto.product.imageUrl || "",
    slug: dto.product._id,
  });

  // Load cart from API if logged in; otherwise from localStorage
  useEffect(() => {
    const init = async () => {
      if (isAuthenticated) {
        try {
          const data = await cartService.get();
          setItems(data.map(mapDtoToItem));
          return;
        } catch (e) {
          // fall back to local storage
        }
      }
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    };
    void init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // Save cart to localStorage whenever it changes (keeps guest cart)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = async (
    item: Omit<CartItem, "quantity">,
    quantity: number = 1
  ) => {
    if (isAuthenticated) {
      try {
        await cartService.add({ productId: item.id, quantity });
        const data = await cartService.get();
        setItems(data.map(mapDtoToItem));
        return;
      } catch (e) {
        // fallback to local state update
      }
    }
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...currentItems, { ...item, quantity }];
    });
  };

  const removeItem = async (id: string) => {
    if (isAuthenticated) {
      try {
        await cartService.remove(id);
        const data = await cartService.get();
        setItems(data.map(mapDtoToItem));
        return;
      } catch (e) {
        // fallback to local state update
      }
    }
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity < 1) {
      // on FE, we can call remove for quantity < 1
      await removeItem(id);
      return;
    }
    if (isAuthenticated) {
      try {
        await cartService.update(id, quantity);
        const data = await cartService.get();
        setItems(data.map(mapDtoToItem));
        return;
      } catch (e) {
        // fallback
      }
    }
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
