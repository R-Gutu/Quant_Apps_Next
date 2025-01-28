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
  console.log(language);
  switch (language) {
    case "ru":
      return {
        desktop: "/icons/road-map-ru.svg",
        mobileLeft: "/icons/road-map-ru-left.svg",
        mobileRight: "/icons/road-map-ru-right.svg",
      };
    case "ro":
      return {
        desktop: "/icons/road-map-ro.svg",
        mobileLeft: "/icons/road-map-ro-left.svg",
        mobileRight: "/icons/road-map-ro-right.svg",
      };
    default:
      return {
        desktop: "/icons/road-map-en.svg",
        mobileLeft: "/icons/road-map-en-left.svg",
        mobileRight: "/icons/road-map-en-right.svg",
      };
  }
}
