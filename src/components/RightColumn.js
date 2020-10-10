import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TypeItemSelect from "./TypeItemSelect";
import {
  deleteAchievement,
  deleteFocusedAchievement,
  updateAchievement,
  updateFocusedAchievement,
} from "../actions";
import { deleteDoc, updateDoc } from "../database/firebase";
import { ReactComponent as SVGDelete } from "../svg/delete.svg";
import { ReactComponent as SVGExitToApp } from "../svg/exit_to_app.svg";

const RightColumn = () => {
  const focusedAchievement = useSelector((state) => state.focusedAchievement);
  const dispatch = useDispatch();

  const onDeleteAchievement = () => {
    if (window.confirm("delete?")) {
      deleteDoc("achievements", focusedAchievement.id).then(() => {
        dispatch(deleteAchievement(focusedAchievement.id));
        dispatch(deleteFocusedAchievement());
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
    updateAchievementContent(event.target.innerText);
  };

  const updateAchievementContent = (content) => {
    content = content.trim();
    dispatch(updateAchievement(focusedAchievement.id, { content }));
    dispatch(updateFocusedAchievement({ content }));
    updateDoc("achievements", focusedAchievement.id, { content });
  };

  return (
    focusedAchievement && (
      <div className="right-column">
        <div className="right-column-header">
          <div className="svg-button">
            <SVGExitToApp
              onClick={() => {
                dispatch(deleteFocusedAchievement());
              }}
            />
          </div>
          <div className="svg-button" onClick={onDeleteAchievement}>
            <SVGDelete />
          </div>
        </div>
        <div
          className="right-column-box right-column-box-content"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onKeyPress={onEnterKeyPress}
          onBlur={onBlur}
        >
          {focusedAchievement.content}
        </div>
        <TypeItemSelect />
        <div className="right-column-box right-column-box-content">
          created:{" "}
          {focusedAchievement.created
            ? tsToString(focusedAchievement.created)
            : null}
        </div>
        {focusedAchievement.completed && (
          <div className="right-column-box right-column-box-content">
            completed:{" "}
            {focusedAchievement.completed
              ? tsToString(focusedAchievement.completed)
              : null}
          </div>
        )}
      </div>
    )
  );
};

const tsToString = function (ts) {
  const date = new Date(ts);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();

  return (
    [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join("-") +
    " " +
    (h > 9 ? "" : "0") +
    h +
    ":" +
    (m > 9 ? "" : "0") +
    m
  );
};

export default RightColumn;
