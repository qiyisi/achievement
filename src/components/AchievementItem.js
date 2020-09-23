import React from 'react';

class AchievementItem extends React.Component {
  render() {
    return (
      <div className='achievement-item'>
        <span>{this.props.data.content}</span>
      </div>
    )
  }
}

export default AchievementItem;