import React from 'react';
import AddAchievementItem from './AddAchievementItem';
import AchievementItem from './AchievementItem';


const CenterColumn = ({ achievements, focusedType, focusedAchievement, setFocusedAchievement, addAchievement, toggleAchievement }) => {
  const onCheckBoxClick = (item) => {
    const completed = item.completed ? null : new Date().getTime()
    toggleAchievement(item.id, completed)
  }

  const achievementList = achievements.filter(item => focusedType && item.type === focusedType.id).sort((a, b) => {
    if (!!a.completed && !!a.completed === !!b.completed) {
      return b.completed - a.completed
    } else if (!a.completed && !a.completed === !b.completed) {
      return b.created - a.created
    } else {
      return a.completed ? 1 : -1
    }
  })

  return (focusedType &&
    <div className="center-column">
      <div className="type-header">{focusedType.name}</div>
      <div className="achievement-item-container">
        <AddAchievementItem addAchievement={addAchievement} focusedType={focusedType} />
        <div className="achievement-list">
          {achievementList.map(item => (<AchievementItem {...item} key={item.id} focusedAchievement={focusedAchievement} onAchievementClick={() => { setFocusedAchievement(item) }} onCheckBoxClick={(event) => { onCheckBoxClick(item) }} />))}
        </div>
      </div>
    </div>
  )
}
export default CenterColumn;
