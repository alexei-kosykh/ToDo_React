import "./Tasks.scss";
import editSvg from "../../assets/icon/editSvg.svg";

const Tasks = () => {
  return (
    <div className="block-note__tasks">
      <h2 className="block-note__tasks_title">
        Frontend
        <img src={editSvg} alt="Edit icon" />
      </h2>
      <div className="block-note__tasks_items">
        <div className="block-note__tasks_item-row">
          <div className="block-note__tasks_checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>
          <input value="ReactJS Hooks (useState, useEffect and ect.)" />
        </div>
      </div>
    </div>
  );
};
export default Tasks;
