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
  return (
    <div className="block-note">
      <div className="block-note__sidebar">
        <List items={[{ icon: listSvg, title: "Все задачи", active: true }]} />
        <List
          items={[
            { color: "green", title: "Покупки" },
            { color: "blue", title: "FrontEnd" },
            { color: "pink", title: "Фильмы и сериалы" },
          ]}
          isRemovable
        />
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
