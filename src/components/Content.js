import React from 'react';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: [{ name: 'test', index: '1' }, { name: 'books', index: '2' }, { name: 'games', index: '3' }],
      focusType: null,
      achievementList: [{ content: 'ach 1', index: '1', completed: true }, { content: 'ach 2', index: '2', completed: false }],
      showRightColumn: false
    }
    this.setFocusType = this.setFocusType.bind(this)
    this.setFocusAchievement = this.setFocusAchievement.bind(this)
    this.checkAchievement = this.checkAchievement.bind(this)
    this.addType = this.addType.bind(this)
    this.addAchievement = this.addAchievement.bind(this)
  }
  setFocusType(index) {
    const focusType = this.state.typeList.find((item) => item.index === index)
    this.setState({ focusType: focusType })
  }
  setFocusAchievement(index) {
    const focusAchievement = this.state.achievementList.find((item) => item.index === index)
    this.setState({ focusAchievement: focusAchievement, showRightColumn: true })
  }
  checkAchievement(event, index) {
    const newAchievementList = this.state.achievementList.map((item) => {
      if (item.index === index) {
        if (item.completed) {
          item.completed = null
        } else {
          item.completed = new Date().getTime()
        }
      }
      return item
    })
    this.setState({ achievementList: newAchievementList })
  }
  addType(name) {
    this.setState({ typeList: this.state.typeList.concat({ name: name, index: (this.state.typeList.length + 1).toString() }) })
  }
  addAchievement(content) {
    this.setState({ achievementList: [{ content: content, index: (this.state.achievementList.length + 1).toString() }].concat(this.state.achievementList) })
  }
  render() {
    return (
      <div className="content" >
        <LeftColumn typeList={this.state.typeList} focusType={this.state.focusType} onTypeItemClick={this.setFocusType} addType={this.addType} />
        <CenterColumn achievementList={this.state.achievementList} focusType={this.state.focusType} focusAchievement={this.state.focusAchievement} addAchievement={this.addAchievement} onAchievementItemClick={this.setFocusAchievement} onAchievementItemCheckboxClick={this.checkAchievement} />
        <RightColumn show={this.state.showRightColumn} data={this.state.focusAchievement} />
      </div>
    );
  }
}

export default Content;
