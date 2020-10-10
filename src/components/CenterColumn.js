import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddAchievementItem from "./AddAchievementItem";
import AchievementItem from "./AchievementItem";
import {
  deleteType,
  setFocusedAchievementId,
  setFocusedTypeId,
  updateType,
} from "../actions";
import { deleteDoc, updateDoc } from "../database/firebase";
import { ReactComponent as SVGDelete } from "../svg/delete.svg";

const CenterColumn = () => {
  const types = useSelector((state) => state.types);
  const achievements = useSelector((state) => state.achievements);
  const focusedTypeId = useSelector((state) => state.focusedTypeId);
  const focusedAchievementId = useSelector(
    (state) => state.focusedAchievementId
  );
  const dispatch = useDispatch();

  const focusedType =
    focusedTypeId === "0"
      ? { name: "uncategorized", id: "0" }
      : types.find((item) => item.id === focusedTypeId);

  const achievementList = achievements
    .filter((item) =>
      focusedTypeId === "0"
        ? !types.find((it) => it.id === item.type)
        : focusedTypeId && item.type === focusedTypeId
    )
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
      deleteDoc("types", focusedTypeId).then(() => {
        dispatch(setFocusedAchievementId(null));
        dispatch(setFocusedTypeId(null));
        dispatch(deleteType(focusedTypeId));
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
    dispatch(updateType(focusedTypeId, { name }));
    updateDoc("types", focusedTypeId, { name });
  };

  return (
    focusedTypeId && (
      <div className="center-column">
        <div className="type-header">
          <div
            className="type-header-label"
            contentEditable={focusedTypeId !== "0"}
            suppressContentEditableWarning={true}
            onKeyPress={onEnterKeyPress}
            onBlur={onBlur}
          >
            {focusedType.name}
          </div>
          {focusedTypeId !== "0" && (
            <div className="svg-button" onClick={onDeleteType}>
              <SVGDelete />
            </div>
          )}
        </div>
        <div className="achievement-item-container">
          <AddAchievementItem />
          <div className="achievement-list">
            {achievementList.map((item) => (
              <AchievementItem
                achievement={item}
                focusedAchievementId={focusedAchievementId}
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
