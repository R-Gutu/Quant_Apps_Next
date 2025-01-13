import IntroEn from "../assets/video/intro-en.mp4";
import IntroRo from "../assets/video/intro-ro.mp4";
import RoadMapEn from "../assets/icons/road-map-en.svg";
import RoadMapRu from "../assets/icons/road-map-ru.svg";
import RoadMapRo from "../assets/icons/road-map-ro.svg";

export function getIntroByLanguage(language) {
  switch (language) {
    case "en":
      return IntroEn;
    case "ro":
      return IntroRo;

    default:
      return IntroEn;
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
