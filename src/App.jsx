import { useState, useEffect } from "react";
import axios from "axios";
import { listSvg, addSvg } from "./assets/PackSvg";
import { List, Tasks, AddListButton } from "./Components";

function App() {
  const [lists, setLists] = useState("");
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lists?_expand=color&_embed=tasks")
      .then(({ data }) => {
        setLists(data);
      });
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="block-note">
      <div className="block-note__sidebar">
        <List items={[{ icon: listSvg, title: "Все задачи", active: true }]} />
        {lists ? (
          <List
            items={lists}
            onRemove={(id) => {
              const newLists = lists.filter((item) => item.id !== id);
              setLists(newLists);
            }}
            isRemovable
          />
        ) : (
          "Загрузка..."
        )}
        <AddListButton
          onAdd={onAddList}
          colors={colors}
          icon={addSvg}
          title="Добавить список"
        />
      </div>

      {lists && <Tasks list={lists[1]} />}
    </div>
  );
}

export default App;
