import PropTypes from "prop-types";

const Blur = (props) => {
  const { color, height, width, top, bottom, left, right, filter } = props;

  const getColor = () => {
    switch (color) {
      case "purple":
        return "radial-gradient(circle, rgba(156, 8, 255, 0.8156512605042017) -10%, rgba(156, 8, 255, 0) 70%)";
      case "blue":
        return "radial-gradient(circle, rgba(30, 80, 255, 0.7904411764705882) -30%, rgba(30, 80, 255, 0) 70%)";

      default:
        return color;
    }
  };

  return (
    <span
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        opacity: "0.5",
        width: width,
        height: height,
        background: getColor(),
        zIndex: -10,
        filter: filter,
        WebkitFilter: filter,
      }}
    />
  );
};

Blur.propTypes = {
  color: "blue" | "purple",
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  filter: PropTypes.string.isRequired,
};

export default Blur;
