import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateType } from "../actions";
import TypeItem from "./TypeItem";
import AddTypeItem from "./AddTypeItem";
import HiddenTypeItem from "./HiddenTypeItem";
import { updateDoc } from "../database/firebase";

const LeftColumn = () => {
  const types = useSelector((state) => state.types);
  const achievements = useSelector((state) => state.achievements);
  const focusedTypeId = useSelector((state) => state.focusedTypeId);
  const settings = useSelector((state) => state.settings);
  const draggedTypeId = useSelector((state) => state.draggedTypeId);
  const dispatch = useDispatch();

  const showTypes = [];
  const hiddenTypes = [];
  types.forEach((item) => {
    item.hidden ? hiddenTypes.push(item) : showTypes.push(item);
  });

  const typesData = achievements.reduce((accumulator, currentValue) => {
    const type = types.find((item) => item.id === currentValue.type);
    const typeId = type ? currentValue.type : "0";
    if (accumulator[typeId]) {
      accumulator[typeId].total += 1;
      accumulator[typeId].completed += currentValue.completed ? 1 : 0;
    } else {
      accumulator[typeId] = {
        total: 1,
        completed: currentValue.completed ? 1 : 0,
      };
    }
    return accumulator;
  }, {});

  const onDropShow = () => {
    if (draggedTypeId) {
      const draggedType = types.find((item) => draggedTypeId === item.id);
      if (draggedType && draggedType.hidden) {
        dispatch(updateType(draggedTypeId, { hidden: false }));
        updateDoc("types", draggedTypeId, { hidden: false });
      }
    }
  };

  const onDropHidden = () => {
    if (draggedTypeId) {
      const draggedType = types.find((item) => draggedTypeId === item.id);
      if (draggedType && !draggedType.hidden) {
        dispatch(updateType(draggedTypeId, { hidden: true }));
        updateDoc("types", draggedTypeId, { hidden: true });
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="left-column">
      <div className="type-item-container">
        <div onDrop={onDropShow} onDragOver={onDragOver}>
          {showTypes &&
            showTypes.map((item) => (
              <TypeItem
                type={item}
                focusedTypeId={focusedTypeId}
                key={item.id}
                data={typesData[item.id]}
              />
            ))}
        </div>
        {typesData["0"] && (
          <TypeItem
            type={{ name: "uncategorized", id: "0" }}
            focusedTypeId={focusedTypeId}
            key={"0"}
            data={typesData["0"]}
            draggable="true"
          />
        )}
        <AddTypeItem />
        <div onDrop={onDropHidden} onDragOver={onDragOver}>
          <HiddenTypeItem />
          {settings.showHiddenTypeItems &&
            hiddenTypes &&
            hiddenTypes.map((item) => (
              <TypeItem
                type={item}
                focusedTypeId={focusedTypeId}
                key={item.id}
                data={typesData[item.id]}
                draggable="true"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
