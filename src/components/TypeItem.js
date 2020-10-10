import React from "react";
import { useDispatch } from "react-redux";
import { setFocusedType } from "../actions";
import { ReactComponent as SVGList } from "../svg/list.svg";

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
      <div>
        <SVGList />
        <span>{type.name}</span>
      </div>
    </div>
  );
};

export default TypeItem;
