import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

