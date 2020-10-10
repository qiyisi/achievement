import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAchievement } from "../actions";
import { addDoc } from "../database/firebase";
import { ReactComponent as SVGAdd } from "../svg/add.svg";

const AddAchievementItem = () => {
  const focusedTypeId = useSelector((state) => state.focusedTypeId);
  const dispatch = useDispatch();

  const onEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      const content = event.target.value.trim();
      if (content) {
        const achievement = {
          content,
          type: focusedTypeId,
          created: new Date().getTime(),
        };
        addDoc("achievements", achievement).then((id) => {
          dispatch(addAchievement({ ...achievement, id }));
        });
      }
      event.target.value = "";
    }
  };
  return (
    <div className="add-achievement-item">
      <div>
        <SVGAdd />
        <div>
          <input
            className="add-achievement-item-input"
            placeholder="add"
            onKeyPress={onEnterKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default AddAchievementItem;
