const body = document.querySelector("body");
const html = document.querySelector("html");

export function handleCloseModal(event) {
  const parent = event.target.closest(".modal");
  if (parent.id === "video-popup") {
    const video = document.getElementById("localVideo");
    parent.classList.remove("d-flex");
    video.pause();
  } else {
    parent.classList.remove("d-block");
  }
  body.style.overflowY = "auto";
  html.style.overflowY = "auto";
}

export function openVideoModal() {
  const video = document.getElementById("localVideo");
  const videoModal = document.getElementById("video-popup");

  body.style.overflowY = "hidden";
  html.style.overflowY = "hidden";
  videoModal.classList.add("d-flex");
  video.play();
}

export function openLetsTalkModal() {
  const talkModal = document.getElementById("talk-popup");

  talkModal.classList.add("d-block");
  body.style.overflowY = "hidden";
  html.style.overflowY = "hidden";
}

export function handleClickVideoModal(e) {
  const video = document.getElementById("localVideo");
  const videoModal = document.getElementById("video-popup");

  if (e.target === videoModal) {
    videoModal.classList.remove("d-flex");
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
    video.pause();
    video.currentTime = 0;
  }
}

window.onclick = function (e) {
  const talkModal = document.getElementById("talk-popup");

  if (e.target == talkModal) {
    talkModal.classList.remove("d-block");
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
  }
};

document.addEventListener("click", (e) => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burger = document.querySelector(".burger");
  const childrensArray = [].slice.call(mobileMenu?.children);

  const childrensOfChildrens = childrensArray.flatMap((childrenOuter) =>
    [].slice.call(childrenOuter.children)
  );

  if (
    mobileMenu.classList.contains("active") &&
    e.target !== burger &&
    !childrensArray.includes(e.target) &&
    !childrensOfChildrens.includes(e.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});
