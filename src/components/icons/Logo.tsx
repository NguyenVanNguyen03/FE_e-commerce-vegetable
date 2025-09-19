interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="14" cy="14" r="13" stroke="#7EB693" strokeWidth="2" />
    <path d="M14 7V21" stroke="#7EB693" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 14H21" stroke="#7EB693" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M9.5 9.5L18.5 18.5"
      stroke="#7EB693"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18.5 9.5L9.5 18.5"
      stroke="#7EB693"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
