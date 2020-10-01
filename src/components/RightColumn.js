import React from 'react';


const RightColumn = ({ focusedAchievement, deleteAchievement }) => (
  (focusedAchievement &&
    <div className="right-column" >
      <div className="right-column-box">
        <div className="right-column-box-content">
          {focusedAchievement.content}
        </div>
      </div>
      <div className="right-column-box">
        <div className="right-column-box-content">
          created: {focusedAchievement.created ? tsToString(focusedAchievement.created) : null}
        </div>
      </div>
      {focusedAchievement.completed && <div className="right-column-box">
        <div className="right-column-box-content">
          completed: {focusedAchievement.completed ? tsToString(focusedAchievement.completed) : null}
        </div>
      </div>}
      <div className="right-column-box" onClick={() => deleteAchievement(focusedAchievement.id)}>
        <div className="right-column-box-content right-column-box-delete">
          delete
        </div>
      </div>
    </div>)
);


const tsToString = function (ts) {
  const date = new Date(ts);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();

  return [date.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd,
  ].join('-') + ' ' +
    (h > 9 ? '' : '0') + h + ':' +
    (m > 9 ? '' : '0') + m;
};

export default RightColumn;
