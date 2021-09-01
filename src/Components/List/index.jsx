import classNames from "classnames";
import ColorCircle from "../ColorCircle";
import axios from "axios";

import removeSvg from "../../assets/icon/removeSvg.svg";

import "./List.scss";

const List = ({
  items,
  isRemovable,
  onRemove,
  onClick,
  onClickItem,
  activeItem,
}) => {
  const removeList = (item) => {
    if (window.confirm("Хотите удалить?")) {
      axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id,
          })}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <span>
            {item.icon ? item.icon : <ColorCircle color={item.color.name} />}
          </span>
          <span>
            {item.title}
            {item.tasks && ` (${item.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
