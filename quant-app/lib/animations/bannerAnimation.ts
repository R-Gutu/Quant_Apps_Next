export const bannerAnimation = {
    hidden: {
        opacity: 0,
        y: -80,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8
        }
    }
}