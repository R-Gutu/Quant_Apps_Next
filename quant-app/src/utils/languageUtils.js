import RoadMapEn from "@/src/assets/icons/road-map-en.svg";
import RoadMapRu from "@/src/assets/icons/road-map-ru.svg";
import RoadMapRo from "@/src/assets/icons/road-map-ro.svg";

export function getIntroByLanguage(language) {
  switch (language) {
    case "en":
      return './intro-en.mp4';
    case "ro":
      return './intro-ro.mp4';
    default:
      return './intro-en.mp4';
  }
}

export function getRoadMapByLanguage(language) {
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
