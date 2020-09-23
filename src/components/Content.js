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
      achievementList: [{ content: 'ach 1', index: '1' }, { content: 'ach 2', index: '2' }],
      showRightColumn: false
    }
    this.toggleRightColumn = this.toggleRightColumn.bind(this)
    this.setFocusType = this.setFocusType.bind(this)
    this.addType = this.addType.bind(this)
    this.addAchievement = this.addAchievement.bind(this)
  }
  toggleRightColumn() {
    this.setState({ showRightColumn: !this.state.showRightColumn })
  }
  setFocusType(index) {
    const focusType = this.state.typeList.find((item) => item.index === index)
    this.setState({ focusType: focusType })
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
        <CenterColumn achievementList={this.state.achievementList} focusType={this.state.focusType} addAchievement={this.addAchievement} onCenterColumnClick={this.toggleRightColumn} />
        <RightColumn show={this.state.showRightColumn} />
      </div>
    );
  }
}

export default Content;
