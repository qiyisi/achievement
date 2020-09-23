import React from 'react';
import AddAchievementItem from './AddAchievementItem';
import AchievementItem from './AchievementItem';

class CenterColumn extends React.Component {
  render() {
    return (this.props.focusType &&
      <div className="center-column">
        <div className="type-header">{this.props.focusType.name}</div>
        <div className="achievement-item-container">
          <AddAchievementItem addAchievement={this.props.addAchievement} />
          <div className="achievement-list">
            {this.props.achievementList.map(item => (<AchievementItem data={item} key={item.index} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default CenterColumn;
