'use client'
import AppLink from "./AppLink"
import { scrollToId } from "@/lib/utils/utils"

interface ScrollLinkProps {
  id: string;
  href: string;
  elementId: string;
  children: React.ReactNode;
}

export default function ScrollLink({ id, href, elementId, children }: ScrollLinkProps) {
  return (
    <span>
      <AppLink
        data-id={id}
        href={href}
        scroll={false}
        onClick={() => scrollToId(elementId)}
      >
        {children}
      </AppLink>
    </span>
  )
}
