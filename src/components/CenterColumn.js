import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddAchievementItem from "./AddAchievementItem";
import AchievementItem from "./AchievementItem";
import { deleteType, setFocusedType, updateType } from "../actions";
import { deleteDoc, updateDoc } from "../database/firebase";
import { ReactComponent as SVGDelete } from "../svg/delete.svg";

const CenterColumn = () => {
  const achievements = useSelector((state) => state.achievements);
  const focusedType = useSelector((state) => state.focusedType);
  const focusedAchievement = useSelector((state) => state.focusedAchievement);
  const dispatch = useDispatch();

  const achievementList = achievements
    .filter((item) => focusedType && item.type === focusedType.id)
    .sort((a, b) => {
      if (!!a.completed && !!a.completed === !!b.completed) {
        return b.completed - a.completed;
      } else if (!a.completed && !a.completed === !b.completed) {
        return b.created - a.created;
      } else {
        return a.completed ? 1 : -1;
      }
    });

  const onDeleteType = () => {
    if (window.confirm("delete?")) {
      deleteDoc("types", focusedType.id).then(() => {
        dispatch(deleteType(focusedType.id));
        dispatch(setFocusedType(null));
      });
    }
  };

  const onEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    updateTypeName(event.target.innerText);
  };

  const updateTypeName = (name) => {
    name = name.trim();
    dispatch(updateType(focusedType.id, { name }));
    updateDoc("types", focusedType.id, { name });
  };

  return (
    focusedType && (
      <div className="center-column">
        <div className="type-header">
          <div
            className="type-header-label"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onKeyPress={onEnterKeyPress}
            onBlur={onBlur}
          >
            {focusedType.name}
          </div>
          <div className="svg-button" onClick={onDeleteType}>
            <SVGDelete />
          </div>
        </div>
        <div className="achievement-item-container">
          <AddAchievementItem />
          <div className="achievement-list">
            {achievementList.map((item) => (
              <AchievementItem
                achievement={item}
                focusedAchievement={focusedAchievement}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
export default CenterColumn;
