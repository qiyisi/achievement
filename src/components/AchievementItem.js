import React from "react";
import { useDispatch } from "react-redux";
import {
  setFocusedAchievementId,
  toggleAchievement,
  setDraggedAchievementId,
} from "../actions";
import { updateDoc } from "../database/firebase";
import { ReactComponent as SVGCheckCircle } from "../svg/check_circle.svg";
import { ReactComponent as SVGRadioButtonUnchecked } from "../svg/radio_button_unchecked.svg";

const AchievementItem = ({ achievement, focusedAchievementId }) => {
  const dispatch = useDispatch();

  const onCheckBoxClick = (event) => {
    event.stopPropagation();
    const completed = achievement.completed ? null : new Date().getTime();
    dispatch(toggleAchievement(achievement.id, completed));
    updateDoc("achievements", achievement.id, { completed });
  };

  const onDragStart = () => {
    dispatch(setDraggedAchievementId(achievement.id));
  };

  const onDragEnd = () => {
    dispatch(setDraggedAchievementId(null));
  };

  return (
    <div
      className={[
        "cursor-grab achievement-item",
        focusedAchievementId && focusedAchievementId === achievement.id
          ? "achievement-item-focus"
          : null,
      ].join(" ")}
      onClick={() => dispatch(setFocusedAchievementId(achievement.id))}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div>
        <div onClick={onCheckBoxClick}>
          {achievement.completed && <SVGCheckCircle />}
          {!achievement.completed && <SVGRadioButtonUnchecked />}
        </div>
        <span>{achievement.content}</span>
      </div>
    </div>
  );
};

export default AchievementItem;
