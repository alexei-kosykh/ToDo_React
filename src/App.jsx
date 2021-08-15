import { useState } from "react";
import List from "./Components/List";
import AddListButton from "./Components/AddListButton";
import { listSvg, addSvg, checkSvg, editSvg } from "./assets/PackSvg";
import Tasks from "./Components/Tasks";

import DB from "./assets/db.json";

function App() {
  const [lists, setLists] = useState(
    DB.lists.map((item) => {
      item.color = DB.colors.filter(
        (color) => color.id === item.colorId
      )[0].name;
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="block-note">
      <div className="block-note__sidebar">
        <List items={[{ icon: listSvg, title: "Все задачи", active: true }]} />
        <List
          items={lists}
          onRemove={(item) => {
            console.log(item);
          }}
          isRemovable
        />
        <AddListButton
          onAdd={onAddList}
          colors={DB.colors}
          icon={addSvg}
          title="Добавить список"
        />
      </div>

      <Tasks />
    </div>
  );
}

export default App;
