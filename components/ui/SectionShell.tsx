import { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full";
}

export default function SectionShell({
  children,
  className = "",
  maxWidth = "6xl",
}: SectionShellProps) {
  const maxWidthClasses: Record<
    NonNullable<SectionShellProps["maxWidth"]>,
    string
  > = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  const maxWidthClass = maxWidthClasses[maxWidth] ?? maxWidthClasses["6xl"];

  return (
    <section className={`w-full ${className}`}>
      <div
        className={`mx-auto w-full ${maxWidthClass} px-4 sm:px-6 lg:px-8`}
      >
        {children}
      </div>
    </section>
  );
}

