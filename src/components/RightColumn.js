import React from 'react';
import TypeItemSelect from './TypeItemSelect'

const RightColumn = ({ types, focusedAchievement, deleteAchievement, updateAchievement }) => (
  (focusedAchievement &&
    <div className="right-column" >
      <div className="right-column-box right-column-box-content">
        {focusedAchievement.content}
      </div>
      <TypeItemSelect types={types} focusedAchievement={focusedAchievement} updateAchievement={updateAchievement} />
      <div className="right-column-box right-column-box-content">
        created: {focusedAchievement.created ? tsToString(focusedAchievement.created) : null}
      </div>
      {focusedAchievement.completed &&
        <div className="right-column-box right-column-box-content">
          completed: {focusedAchievement.completed ? tsToString(focusedAchievement.completed) : null}
        </div>}
      <div className="right-column-box right-column-box-content right-column-box-delete" onClick={() => deleteAchievement(focusedAchievement.id)}>
        delete
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
