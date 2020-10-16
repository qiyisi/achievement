import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFocusedTypeId,
  setDraggedTypeId,
  updateAchievement,
} from "../actions";
import { updateDoc } from "../database/firebase";
import { ReactComponent as SVGList } from "../svg/list.svg";

const TypeItem = ({ type, focusedTypeId, data }) => {
  const achievements = useSelector((state) => state.achievements);
  const draggedAchievementId = useSelector(
    (state) => state.draggedAchievementId
  );
  const dispatch = useDispatch();

  const onDragStart = () => {
    dispatch(setDraggedTypeId(type.id));
  };

  const onDragEnd = () => {
    dispatch(setDraggedTypeId(null));
  };

  const onDrop = () => {
    if (draggedAchievementId) {
      const draggedAchievement = achievements.find(
        (item) => draggedAchievementId === item.id
      );
      if (draggedAchievement && draggedAchievement.type !== type.id) {
        dispatch(updateAchievement(draggedAchievementId, { type: type.id }));
        updateDoc("achievements", draggedAchievementId, { type: type.id });
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={[
        "cursor-grab type-item",
        focusedTypeId && focusedTypeId === type.id ? "type-item-focus" : null,
      ].join(" ")}
      onClick={() => dispatch(setFocusedTypeId(type.id))}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onDragOver={onDragOver}
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
