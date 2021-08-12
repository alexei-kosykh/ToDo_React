import classNames from "classnames";
import ColorCircle from "../ColorCircle";

import "./List.scss";

const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <span>
            {item.icon ? item.icon : <ColorCircle color={item.color} />}
          </span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
