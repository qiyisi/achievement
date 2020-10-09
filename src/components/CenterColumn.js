import React from "react";
import { useSelector } from "react-redux";
import AddAchievementItem from "./AddAchievementItem";
import AchievementItem from "./AchievementItem";

const CenterColumn = () => {
  const achievements = useSelector((state) => state.achievements);
  const focusedType = useSelector((state) => state.focusedType);
  const focusedAchievement = useSelector((state) => state.focusedAchievement);

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

  return (
    focusedType && (
      <div className="center-column">
        <div className="type-header">{focusedType.name}</div>
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
