'use client'
import { Link } from "@/i18n/routing"
import { scrollToId } from "@/lib/utils/utils"
export default function ScrollLink({ id, className, href, style, elementId, children }: any) {
    return (
        <span>
            <Link
                data-id={id}
                className={className}
                href={href}
                style={style}
                scroll={false}
                onClick={()=>scrollToId(elementId)}
            >
                {children}
            </Link>
        </span>

    )
}