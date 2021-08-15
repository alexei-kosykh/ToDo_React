import { useState } from "react";
import List from "../List";
import ColorCircle from "../ColorCircle";

import closeSvg from "../../assets/icon/closeSvg.svg";

import "./AddListButton.scss";

const AddListButton = ({ icon, title, colors, onAdd }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");

  const addList = () => {
    if (!inputValue) {
      alert("Ввведите название списка");
      return;
    }
    const color = colors.filter((c) => c.id === selectedColor)[0].name;
    onAdd({
      id: Math.random(),
      title: inputValue,
      color,
    });
    setShowAddModal(false);
    setInputValue("");
    setSelectedColor(colors[0].id);
  };

  return (
    <>
      <List
        onClick={() => setShowAddModal(true)}
        items={[
          {
            className: "list__add-list-button",
            icon: icon,
            title: title,
          },
        ]}
      />
      {showAddModal && (
        <div className="add-apear-block">
          <img
            onClick={() => setShowAddModal(false)}
            src={closeSvg}
            alt="Close"
            className="add-apear-block__close-btn"
          />

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="area-input"
            type="text"
            placeholder="Название списка.."
          />

          <div className="add-apear-block__colors">
            {colors.map((color) => (
              <ColorCircle
                onClick={() => setSelectedColor(color.id)}
                key={color.id}
                color={color.name}
                classActive={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">
            Добавить
          </button>
        </div>
      )}
    </>
  );
};

export default AddListButton;
