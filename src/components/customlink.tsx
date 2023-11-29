import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function CustomLink({
  href,
  children,
  className,
}: CustomLinkProps) {
  return (
    <Link href={href} passHref className={className}>
      {children}
    </Link>
  );
}
