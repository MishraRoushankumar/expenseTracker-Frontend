import Link from "next/link";
import React from "react";

type AuthFooterProps = {
  text: string;
  linkText: string;
  href: string;
};

export function AuthFooter({ text, linkText, href }: AuthFooterProps) {
  return (
    <footer>
      <p>{text}</p> <Link href={href}>{linkText}</Link>
    </footer>
  );
}
