import { useState, useEffect, useCallback } from "react"

export default function useOnScreen(elementId: string) {
    const [isIntersecting, setIntersecting] = useState(false);

    const checkElement = useCallback(() => {
        const element = document.getElementById(elementId);
        if (!element) {
            setIntersecting(false);
            return null;
        }
        return element;
    }, [elementId]);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        let observer: IntersectionObserver | null = null;
        
        // Create the observer
        const initializeObserver = () => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    threshold: 0.1 // Trigger when at least 10% of the element is visible
                }
            );
        };

        // Function to start observing
        const startObserving = () => {
            const element = checkElement();
            if (element && observer) {
                observer.observe(element);
            }
        };

        // Initialize observer
        initializeObserver();
        startObserving();

        // Set up an interval to check for the element
        const intervalId = setInterval(() => {
            if (!document.getElementById(elementId)) {
                setIntersecting(false);
            } else {
                startObserving();
            }
        }, 100);

        // Cleanup function
        return () => {
            if (observer) {
                observer.disconnect();
            }
            clearInterval(intervalId);
            setIntersecting(false);
        };
    }, [elementId, checkElement]);

    return isIntersecting;
}