import React from 'react';

class AchievementItem extends React.Component {
  render() {
    return (
      <div className={['achievement-item', (this.props.focusAchievement && this.props.focusAchievement.index === this.props.data.index) ? 'achievement-item-focus' : null].join(' ')} onClick={() => this.props.onAchievementItemClick(this.props.data.index)}>
        <input type="checkbox" checked={this.props.data.completed} onClick={(event) => this.props.onAchievementItemCheckboxClick(event, this.props.data.index)} onChange={() => console.log('123')} />
        <span>{this.props.data.content}</span>
      </div>
    )
  }
}

export default AchievementItem;