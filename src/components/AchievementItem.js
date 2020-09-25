import React from 'react';

class AchievementItem extends React.Component {
  render() {
    return (
      <div className={['achievement-item', (this.props.focusAchievement && this.props.focusAchievement.id === this.props.data.id) ? 'achievement-item-focus' : null].join(' ')} onClick={() => this.props.onAchievementItemClick(this.props.data.id)}>
        <input type="checkbox" className="achievement-item-checkbox" checked={this.props.data.completed || false} onClick={() => this.props.onAchievementItemCheckboxClick(this.props.data.id)} onChange={() => null} />
        <span>{this.props.data.content}</span>
      </div>
    )
  }
}

export default AchievementItem;