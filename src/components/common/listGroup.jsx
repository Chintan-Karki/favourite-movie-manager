import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect,
  } = props;
  return (
    <ul className="list-group">
      {items.map((g) => (
        <li
          key={g[valueProperty]}
          className={
            g === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
