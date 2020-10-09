import React from "react";
import { useDispatch } from "react-redux";
import { setFocusedAchievement, toggleAchievement } from "../actions";
import { updateDoc } from "../database/firebase";

const AchievementItem = ({ achievement, focusedAchievement }) => {
  const dispatch = useDispatch();

  const onCheckBoxChange = () => {
    const completed = achievement.completed ? null : new Date().getTime();
    dispatch(toggleAchievement(achievement.id, completed));
    updateDoc("achievements", achievement.id, { completed });
  };

  return (
    <div
      className={[
        "achievement-item",
        focusedAchievement && focusedAchievement.id === achievement.id
          ? "achievement-item-focus"
          : null,
      ].join(" ")}
      onClick={() => dispatch(setFocusedAchievement(achievement))}
    >
      <input
        type="checkbox"
        className="achievement-item-checkbox"
        checked={achievement.completed || false}
        onChange={onCheckBoxChange}
      />
      <span>{achievement.content}</span>
    </div>
  );
};

export default AchievementItem;
