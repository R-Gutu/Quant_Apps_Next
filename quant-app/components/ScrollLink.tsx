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
    <span onClick={() => scrollToId(elementId)}>
      <AppLink
        data-id={id}
        href={href}
        scroll={false}
      >
        {children}
      </AppLink>
    </span>
  )
}
