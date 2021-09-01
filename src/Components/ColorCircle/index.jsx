import classNames from "classnames";

import "./ColorCircle.scss";

const ColorCircle = ({ color, classActive, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={classNames("color-circle", {
        [`color-circle--${color}`]: color,
        classActive,
      })}
    ></span>
  );
};
export default ColorCircle;
