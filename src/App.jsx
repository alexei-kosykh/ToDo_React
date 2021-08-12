import { useState } from "react";
import List from "./Components/List";
import AddListButton from "./Components/AddListButton";
import {
  listSvg,
  addSvg,
  checkSvg,
  editSvg,
  removeSvg,
} from "./assets/PackSvg";

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
  return (
    <div className="block-note">
      <div className="block-note__sidebar">
        <List items={[{ icon: listSvg, title: "Все задачи", active: true }]} />
        <List items={lists} isRemovable />
        <AddListButton
          colors={DB.colors}
          icon={addSvg}
          title="Добавить список"
        />
      </div>

      <div className="block-note__tasks"></div>
    </div>
  );
}

export default App;
