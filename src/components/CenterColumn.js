import React from 'react';
import AddAchievementItem from './AddAchievementItem';
import AchievementItem from './AchievementItem';


const CenterColumn = ({ achievements, focusedType, focusedAchievement, setFocusedAchievement }) =>
  (focusedType &&
    <div className="center-column">
      <div className="type-header">{focusedType.name}</div>
      <div className="achievement-item-container">
        {/* <AddAchievementItem addAchievement={this.props.addAchievement} /> */}
        <div className="achievement-list">
          {achievements.filter(item => item.type === focusedType.id).map(item => (<AchievementItem {...item} key={item.id} focusedAchievement={focusedAchievement} onAchievementClick={() => { setFocusedAchievement(item) }} />))}
        </div>
      </div>
    </div>
  )

export default CenterColumn;
