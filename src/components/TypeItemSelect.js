import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAchievement, updateFocusedAchievement } from "../actions";
import { updateDoc } from "../database/firebase";

const TypeItemSelect = () => {
  const [showOptions, setShowOptions] = useState(false);
  const focusedAchievement = useSelector((state) => state.focusedAchievement);
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const type = types.find((item) => item.id === focusedAchievement.type);

  const toggleShowOptions = () => {
    if (showOptions) setShowOptions(false);
    else if (types && types.length > 0) {
      setShowOptions(true);
    }
  };

  const selectOption = (id) => {
    dispatch(updateAchievement(focusedAchievement.id, { type: id }));
    dispatch(updateFocusedAchievement({ type: id }));
    updateDoc("achievements", focusedAchievement.id, { type: id });
    setShowOptions(false);
  };

  return (
    <div className="right-column-box right-column-box-select">
      <div className="right-column-box-content" onClick={toggleShowOptions}>
        {type ? type.name : focusedAchievement.type}
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
