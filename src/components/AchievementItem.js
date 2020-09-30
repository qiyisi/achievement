import React from 'react';

class AchievementItem extends React.Component {
  render() {
    return (
      <div className={['achievement-item', (this.props.focusedAchievement && this.props.focusedAchievement.id === this.props.id) ? 'achievement-item-focus' : null].join(' ')} onClick={this.props.onAchievementClick}>
        <input type="checkbox" className="achievement-item-checkbox" checked={this.props.completed || false} onClick={() => null} onChange={() => null} />
        <span>{this.props.content}</span>
      </div>
    )
  }
}

export default AchievementItem;