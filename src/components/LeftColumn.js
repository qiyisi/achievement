import React from "react";
import { useSelector } from "react-redux";
import TypeItem from "./TypeItem";
import AddTypeItem from "./AddTypeItem";
import HiddenTypeItem from "./HiddenTypeItem";

const LeftColumn = () => {
  const types = useSelector((state) => state.types);
  const achievements = useSelector((state) => state.achievements);
  const focusedTypeId = useSelector((state) => state.focusedTypeId);
  const settings = useSelector((state) => state.settings);

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

  return (
    <div className="left-column">
      <div className="type-item-container">
        <div>
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
          />
        )}
        <AddTypeItem />
        <HiddenTypeItem />
        {settings.showHiddenTypeItems &&
          hiddenTypes &&
          hiddenTypes.map((item) => (
            <TypeItem
              type={item}
              focusedTypeId={focusedTypeId}
              key={item.id}
              data={typesData[item.id]}
            />
          ))}
      </div>
    </div>
  );
};

export default LeftColumn;
