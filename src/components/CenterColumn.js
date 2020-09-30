import React from 'react';
import AddAchievementItem from './AddAchievementItem';
import AchievementItem from './AchievementItem';


const CenterColumn = ({ achievements, focusedType, focusedAchievement, setFocusedAchievement, addAchievement, toggleAchievement }) => {
  const onCheckBoxClick = (item) => {
    const completed = item.completed ? null : new Date().getTime()
    toggleAchievement(item.id, completed)
  }

  return (focusedType &&
    <div className="center-column">
      <div className="type-header">{focusedType.name}</div>
      <div className="achievement-item-container">
        <AddAchievementItem addAchievement={addAchievement} focusedType={focusedType} />
        <div className="achievement-list">
          {achievements.filter(item => item.type === focusedType.id).map(item => (<AchievementItem {...item} key={item.id} focusedAchievement={focusedAchievement} onAchievementClick={() => { setFocusedAchievement(item) }} onCheckBoxClick={() => { onCheckBoxClick(item) }} />))}
        </div>
      </div>
    </div>
  )
}
export default CenterColumn;
