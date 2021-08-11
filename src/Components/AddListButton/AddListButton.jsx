import List from "../List/List";

import "./AddListButton.scss";

const AddListButton = ({ icon, title }) => {
  return (
    <>
      <List
        items={[
          {
            className: "list__add-list-button",
            icon: icon,
            title: title,
          },
        ]}
      />
      <ModalAdd/>
      <div className="add-apear-block">
        <h1>123</h1>
      </div>
    </>
  );
};

export default AddListButton;
