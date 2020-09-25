import React from 'react';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';
import { getCollection, addDoc, updateDoc } from './firebase';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: [],
      focusType: null,
      achievements: [],
      achievementList: [],
      showRightColumn: false
    }
    this.setFocusType = this.setFocusType.bind(this)
    this.setFocusAchievement = this.setFocusAchievement.bind(this)
    this.checkAchievement = this.checkAchievement.bind(this)
    this.addType = this.addType.bind(this)
    this.addAchievement = this.addAchievement.bind(this)
  }
  componentDidMount() {
    getCollection('types').then(result => this.setState({ typeList: result }))
    getCollection('achievements').then(result => this.setState({ achievements: result }))
  }
  setFocusType(id) {
    const focusType = this.state.typeList.find((item) => item.id === id)
    const achievementList = this.state.achievements.filter((item) => item.type === focusType.id)
    this.setState({ focusType, achievementList })
  }
  setFocusAchievement(id) {
    const focusAchievement = this.state.achievementList.find((item) => item.id === id)
    this.setState({ focusAchievement: focusAchievement, showRightColumn: true })
  }
  checkAchievement(id) {
    const achievements = this.state.achievements.map((item) => {
      if (item.id === id) {
        let completed = null
        if (!item.completed) {
          completed = new Date().getTime()
        }
        item.completed = completed
        updateDoc('achievements', item.id, { completed })
      }
      return item
    })
    const achievementList = achievements.filter((item) => item.type === this.state.focusType.id)
    this.setState({ achievements, achievementList })
  }
  addType(name) {
    addDoc('types', { name }).then((result) => {
      if (result) this.setState({ typeList: this.state.typeList.concat({ name: name, id: result }) })
    })
  }
  addAchievement(content) {
    const data = { content, type: this.state.focusType.id, created: new Date().getTime() }
    addDoc('achievements', data).then((result) => {
      if (result) {
        this.setState({ achievements: this.state.achievements.concat({ ...data, id: result }) })
        const achievementList = this.state.achievements.filter((item) => item.type === this.state.focusType.id)
        this.setState({ achievementList })
      }
    })
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
