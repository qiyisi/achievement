import React from 'react';

const AddAchievementItem = ({ focusedType, addAchievement }) => {
  const onEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const content = event.target.value.trim()
      if (content) addAchievement({ content, type: focusedType.id, created: new Date().getTime() })
    }
  }
  return (<div className="add-achievement-item">
    <span><input className="add-achievement-item-input" placeholder="add" onKeyPress={onEnterKeyPress} /></span>
  </div>)
}

export default AddAchievementItem;