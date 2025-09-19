import { CartIcon } from "../../../components";
import { useCart } from "../../../contexts/CartContext";

const CartButton = () => {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="flex items-center gap-2 border border-gray rounded-full px-4 py-2 hover:shadow transition"
    >
      <span className="bg-[#274C5B] text-white rounded-full w-8 h-8 flex items-center justify-center relative">
        <CartIcon className="w-5 h-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </span>
      <span className="text-[#274C5B] font-semibold">Cart</span>
    </button>
  );
};

export default CartButton;
