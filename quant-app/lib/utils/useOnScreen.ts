import { useState, useEffect } from "react"

export default function useOnScreen(elementId: string) {
    const [isIntersecting, setIntersecting] = useState(false)
    
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )

        const element = document.getElementById(elementId)
        if (element) {
            observer.observe(element)
        }
        
        return () => observer.disconnect()
    }, [elementId])

    return isIntersecting
}