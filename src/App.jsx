import List from "./Components/List/List";
import AddListButton from "./Components/AddListButton/AddListButton";
import {
  listSvg,
  addSvg,
  checkSvg,
  closeSvg,
  editSvg,
  removeSvg,
} from "./assets/PackSvg";

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
        <AddListButton icon={addSvg} title="Добавить список" />
      </div>

      <div className="block-note__tasks"></div>
    </div>
  );
}

export default App;
