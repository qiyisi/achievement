import React from "react";
import { useDispatch } from "react-redux";
import { setFocusedTypeId } from "../actions";
import { ReactComponent as SVGList } from "../svg/list.svg";

const TypeItem = ({ type, focusedTypeId, data }) => {
  const dispatch = useDispatch();

  console.log({ data });

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
        <span>{type.name}</span>
        <div>
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
