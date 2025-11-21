interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full transition-colors ${className}`}
    >
      {children}
    </span>
  );
}

