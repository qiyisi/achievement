import React from "react";
import { useDispatch } from "react-redux";
import { setFocusedTypeId } from "../actions";
import { ReactComponent as SVGList } from "../svg/list.svg";

const TypeItem = ({ type, focusedTypeId, data }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={[
        "type-item",
        focusedTypeId && focusedTypeId === type.id ? "type-item-focus" : null,
      ].join(" ")}
      onClick={() => dispatch(setFocusedTypeId(type.id))}
    >
      <div>
        <SVGList />
        <div className="type-item-name">{type.name}</div>
        <div className="type-item-count">
          {data && (
            <span>
              {data.completed}/{data.total}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeItem;
