import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TypeItemSelect from "./TypeItemSelect";
import { deleteAchievement, deleteFocusedAchievement } from "../actions";
import { deleteDoc } from "../database/firebase";

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

  return (
    focusedAchievement && (
      <div className="right-column">
        <div className="right-column-box right-column-box-content">
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
        <div
          className="right-column-box right-column-box-content right-column-box-delete"
          onClick={onDeleteAchievement}
        >
          delete
        </div>
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
