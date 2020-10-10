import React from "react";
import { useSelector } from "react-redux";
import TypeItem from "./TypeItem";
import AddTypeItem from "./AddTypeItem";

const LeftColumn = () => {
  const types = useSelector((state) => state.types);
  const focusedTypeId = useSelector((state) => state.focusedTypeId);

  return (
    <div className="left-column">
      <div className="type-item-container">
        <div>
          {types &&
            types.map((item) => (
              <TypeItem
                type={item}
                focusedTypeId={focusedTypeId}
                key={item.id}
              />
            ))}
        </div>
        <AddTypeItem />
      </div>
    </div>
  );
};

export default LeftColumn;
