import classNames from "classnames";

import "./List.scss";

const List = ({ items, isRemovable }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <span>
            {item.icon ? (
              item.icon
            ) : (
              <span
                className={`color-circle color-circle--${item.color}`}
              ></span>
            )}
          </span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
