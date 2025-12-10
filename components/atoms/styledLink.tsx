import { cn } from "@/lib/utils";
import Link from "next/link";

const StyledLink = ({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">) => {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-2 px-3 rounded-sm outline-0 border-0",
        className
      )}
    >
      {children}
    </Link>
  )
}

export default StyledLink;