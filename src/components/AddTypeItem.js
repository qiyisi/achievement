import React from "react";
import { useDispatch } from "react-redux";
import { addType } from "../actions";
import { addDoc } from "../database/firebase";
import { ReactComponent as SVGAdd } from "../svg/add.svg";

const AddTypeItem = () => {
  const dispatch = useDispatch();
  const onEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      const name = event.target.value.trim();
      if (name) {
        addDoc("types", { name }).then((id) => {
          dispatch(addType({ name, id }));
        });
      }
      event.target.value = "";
    }
  };
  return (
    <div className="type-item add-type-item">
      <div>
        <SVGAdd />
        <span>
          <input
            className="add-type-item-input"
            placeholder="add"
            onKeyPress={onEnterKeyPress}
          />
        </span>
      </div>
    </div>
  );
};

export default AddTypeItem;
