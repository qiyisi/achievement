import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSettings } from "../actions";
import { ReactComponent as SVGKeyboardArrowRight } from "../svg/keyboard_arrow_right.svg";
import { ReactComponent as SVGKeyboardArrowDown } from "../svg/keyboard_arrow_down.svg";

const CompletedAchievementItem = ({ achievement, focusedAchievementId }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      updateSettings({
        showCompletedAchievements: !settings.showCompletedAchievements,
      })
    );
  };

  return (
    <div
      className="achievement-item completed-achievement-item"
      onClick={onClick}
    >
      <div>
        <div>
          {settings.showCompletedAchievements && <SVGKeyboardArrowDown />}
          {!settings.showCompletedAchievements && <SVGKeyboardArrowRight />}
        </div>
        <span>completed</span>
      </div>
    </div>
  );
};

export default CompletedAchievementItem;
