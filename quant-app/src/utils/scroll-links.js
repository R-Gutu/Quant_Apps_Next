export function scrollToBlock(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
    });
}