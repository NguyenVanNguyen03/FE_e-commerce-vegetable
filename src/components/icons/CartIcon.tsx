interface CartIconProps {
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
  </svg>
);

export default CartIcon;
