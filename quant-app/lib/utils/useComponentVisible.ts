import { useState, useEffect, useRef, useCallback } from "react";
export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(
      initialIsVisible
    );
    const ref = useRef<HTMLElement | null>(null);
    const toggleElement = useRef<HTMLElement | null>(null);

  
    const handleHideDropdown = useCallback((event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsComponentVisible(false);
      }
    }, []);
  
    const handleClickOutside = useCallback((event: MouseEvent) => {
      // Only close if clicking outside both the dropdown and the toggle button
      if (
        ref.current && 
        !ref.current.contains(event.target as Node) && 
        toggleElement.current && 
        !toggleElement.current.contains(event.target as Node)
      ) {
        setIsComponentVisible(false);
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", handleHideDropdown, true);
      document.addEventListener("mousedown", handleClickOutside, true);
      return () => {
        document.removeEventListener("keydown", handleHideDropdown, true);
        document.removeEventListener("mousedown", handleClickOutside, true);
      };
    }, [handleHideDropdown, handleClickOutside]);
  
    return { ref, toggleElement, isComponentVisible, setIsComponentVisible };
  }