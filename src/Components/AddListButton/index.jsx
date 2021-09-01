import axios from "axios";
import { useState, useEffect } from "react";
import List from "../List";
import ColorCircle from "../ColorCircle";

import closeSvg from "../../assets/icon/closeSvg.svg";

import "./AddListButton.scss";

const AddListButton = ({ title, colors, onAdd }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(3);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const addSvg = (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1V15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setShowAddModal(false);
    setInputValue("");
    setSelectedColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }
    setIsLoading(true);
    axios
      .post("http://localhost:3001/lists", {
        name: inputValue,
        colorId: selectedColor,
      })
      .then(({ data }) => {
        const color = colors.filter((c) => c.id === selectedColor)[0];
        const listObj = { ...data, color, tasks: [] };
        onAdd(listObj);
        onClose();
      })
      .catch(() => {
        alert("Ошибка при добавлении списка!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <List
        onClick={() => setShowAddModal(true)}
        items={[
          {
            className: "list__add-list-button",
            icon: addSvg,
            title: title,
          },
        ]}
      />
      {showAddModal && (
        <div className="add-apear-block">
          <img
            onClick={onClose}
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
                color={color}
                classActive={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">
            {isLoading ? "Добавление" : "Добавить"}
          </button>
        </div>
      )}
    </>
  );
};

export default AddListButton;
