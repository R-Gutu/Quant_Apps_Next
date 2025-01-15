export function scrollToBlock(id : any) {
    document?.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
}