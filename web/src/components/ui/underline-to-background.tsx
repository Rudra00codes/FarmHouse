import Link from "next/link";
import { cn } from "@/lib/utils";

interface UnderlineToBackgroundProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export function UnderlineToBackground({ href, children, className, target }: UnderlineToBackgroundProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden font-medium transition-colors duration-300",
        className
      )}
    >
      {/* Text layer - changes color for contrast against the new background */}
      <span className="relative z-10 px-1 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>

      {/* Background/Underline layer - expands from bottom */}
      <span className="absolute bottom-0 left-0 -z-0 h-[1px] w-full bg-current transition-all duration-300 ease-in-out group-hover:h-full" />
    </Link>
  );
}
