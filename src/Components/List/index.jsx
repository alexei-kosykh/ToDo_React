import classNames from "classnames";
import ColorCircle from "../ColorCircle";
import axios from "axios";

import removeSvg from "../../assets/icon/removeSvg.svg";

import "./List.scss";

const List = ({ items, isRemovable, onRemove, onClick }) => {
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
          className={classNames(item.className, { active: item.active })}
        >
          <span>
            {item.icon ? item.icon : <ColorCircle color={item.color} />}
          </span>
          <span>{item.title}</span>
          {isRemovable && (
            <img
              onClick={() => removeList(item)}
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
