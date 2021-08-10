import "./List.scss";
const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className={item.active ? "active" : ""}>
          <span>
            {item.icon ? (
              item.icon
            ) : (
              <span
                className={`color-circle color-circle--${item.color}`}
              ></span>
            )}
          </span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
