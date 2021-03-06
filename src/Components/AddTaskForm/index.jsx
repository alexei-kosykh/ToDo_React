import { useState } from "react";
import axios from "axios";
import addSvg from "../../assets/icon/addSvg.svg";
import "./AddTaskForm.scss";
const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const toogleFormVisible = () => {
    setVisibleForm(!visibleForm);
    setInputValue("");
  };
  const date = new Date();
  const addZeroDate = (date) => {
    if (date < 10) {
      date = "0" + date;
    }
    return date;
  };
  const dateNow =
    addZeroDate(date.getDate()) +
    "-" +
    addZeroDate(date.getMonth()) +
    "-" +
    addZeroDate(date.getFullYear()) +
    " " +
    addZeroDate(date.getHours()) +
    ":" +
    addZeroDate(date.getMinutes());

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      time: dateNow,
      completed: false,
    };
    setIsLoading(true);
    axios
      .post("http://localhost:3001/tasks", obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toogleFormVisible();
      })
      .catch(() => {
        alert("Ошибка при добавлении задачи!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div onClick={toogleFormVisible} className="tasks__form-new">
          <img src={addSvg} alt="Add icon" />
          <span>Новая задача</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input
            value={inputValue}
            className="area-input"
            type="text"
            placeholder="Текст задачи.."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button disabled={isLoading} onClick={addTask} className="button">
            {isLoading ? "Добавление задачи" : "Добавить задачу"}
          </button>
          <button onClick={toogleFormVisible} className="button button--grey">
            Отмена
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
