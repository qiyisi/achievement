import React from "react";
import { useDispatch } from "react-redux";
import { setFocusedType } from "../actions";

const TypeItem = ({ type, focusedType }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={[
        "type-item",
        focusedType && focusedType.id === type.id ? "type-item-focus" : null,
      ].join(" ")}
      onClick={() => dispatch(setFocusedType(type))}
    >
      <span>{type.name}</span>
    </div>
  );
};

export default TypeItem;
