'use client'
import AppLink from "./AppLink"
import { scrollToId } from "@/lib/utils/utils"
export default function ScrollLink({ id, href, elementId, children }: any) {
    return (
        <span>
            <AppLink
                data-id={id}
                href={href}
                scroll={false}
                onClick={()=>scrollToId(elementId)}
            >
                {children}
            </AppLink>
        </span>

    )
}