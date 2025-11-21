import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";
  
  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-black focus:ring-gray-900",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900",
    ghost:
      "border border-transparent text-gray-900 hover:text-black hover:border-gray-300 focus:ring-gray-400",
  };

  const buttonClasses = baseStyles + " " + variants[variant] + " " + className;

  if (href) {
    return (
      <Link href={href}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={buttonClasses}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );
}

