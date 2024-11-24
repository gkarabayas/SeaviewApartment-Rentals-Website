import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-block animate-gradient bg-gradient-to-r from-[#EBF4F6] via-[#088395] to-[#EBF4F6] [--bg-size:400%] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
