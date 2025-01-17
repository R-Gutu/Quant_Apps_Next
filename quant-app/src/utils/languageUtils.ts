import RoadMapEn from "@/src/assets/icons/road-map-en.svg";
import RoadMapRu from "@/src/assets/icons/road-map-ru.svg";
import RoadMapRo from "@/src/assets/icons/road-map-ro.svg";

export function getIntroByLanguage(language : string) {
  switch (language) {
    case "en":
      return '/videos/intro-en.mp4';
    case "ro":
      return '/videos/intro-ro.mp4';
    default:
      return '/videos/intro-en.mp4';
  }
}

export function getRoadMapByLanguage(language : string) {
  switch (language) {
    case "en":
      return RoadMapEn;
    case "ru":
      return RoadMapRu;
    case "ro":
      return RoadMapRo;
    default:
      return RoadMapEn;
  }
}
