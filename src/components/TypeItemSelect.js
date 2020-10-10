import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAchievement } from "../actions";
import { updateDoc } from "../database/firebase";
import { ReactComponent as KeyboardArrowUp } from "../svg/keyboard_arrow_up.svg";
import { ReactComponent as KeyboardArrowDown } from "../svg/keyboard_arrow_down.svg";

const TypeItemSelect = () => {
  const [showOptions, setShowOptions] = useState(false);
  const achievements = useSelector((state) => state.achievements);
  const focusedAchievementId = useSelector(
    (state) => state.focusedAchievementId
  );
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const focusedAchievement = achievements.find(
    (item) => item.id === focusedAchievementId
  );
  const type = types.find((item) => item.id === focusedAchievement.type);

  const toggleShowOptions = () => {
    if (showOptions) setShowOptions(false);
    else if (types && types.length > 0) {
      setShowOptions(true);
    }
  };

  const selectOption = (id) => {
    dispatch(updateAchievement(focusedAchievementId, { type: id }));
    updateDoc("achievements", focusedAchievementId, { type: id });
    setShowOptions(false);
  };

  return (
    <div className="right-column-box right-column-box-select">
      <div
        className="right-column-box-content right-column-box-select-content"
        onClick={toggleShowOptions}
      >
        <div className="right-column-box-select-label">
          {type ? type.name : "uncategorized"}
        </div>
        {!showOptions && <KeyboardArrowDown />}
        {showOptions && <KeyboardArrowUp />}
      </div>
      {showOptions && (
        <div>
          <div
            className="right-column-box-select-background"
            onClick={toggleShowOptions}
          ></div>
          <div className="right-column-box-select-option-container">
            {types.map((item) => (
              <div
                className="right-column-box-content"
                onClick={() => selectOption(item.id)}
                key={item.id}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeItemSelect;
