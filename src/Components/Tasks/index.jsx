import "./Tasks.scss";
import editSvg from "../../assets/icon/editSvg.svg";
const Tasks = () => {
  return (
    <div className="block-note__tasks">
      <h2 className="block-note__tasks_title">
        Frontend
        <img src={editSvg} alt="Edit icon" />
      </h2>
      <div className="block-note__tasks_items"></div>
    </div>
  );
};
export default Tasks;
