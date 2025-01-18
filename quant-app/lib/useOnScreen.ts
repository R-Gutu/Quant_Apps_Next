import { useState, useMemo, useEffect } from "react"

export default function useOnScreen(elementId: string) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        const element = document.getElementById(elementId)
        if (element) {
            observer.observe(element)
        }
        
        return () => observer.disconnect()
    }, [elementId, observer])

    return isIntersecting
}