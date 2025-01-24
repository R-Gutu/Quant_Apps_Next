export function getIntroByLanguage(language : string) {
  switch (language) {
    case "ro":
      return '/videos/intro-ro.mp4';
    case "ru":
      return '/videos/intro-ru.mp4';
    default:
      return '/videos/intro-en.mp4';
  }
}

export function getRoadMapByLanguage(language : string) {
  switch (language) {
    case "ru":
      return "/icons/road-map-ru.svg";
    case "ro":
      return "/icons/road-map-ro.svg";
    default:
      return "/icons/road-map-en.svg";
  }
}
