import React from 'react';

const AchievementItem = ({ content, id, completed, focusedAchievement, onAchievementClick, onCheckBoxClick }) => (
  <div className={['achievement-item', (focusedAchievement && focusedAchievement.id === id) ? 'achievement-item-focus' : null].join(' ')} onClick={onAchievementClick}>
    <input type="checkbox" className="achievement-item-checkbox" checked={completed || false} onChange={onCheckBoxClick} />
    <span>{content}</span>
  </div>
)

export default AchievementItem;