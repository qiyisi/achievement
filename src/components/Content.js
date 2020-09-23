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
      showRightColumn: true
    }
    this.toggleRightColumn = this.toggleRightColumn.bind(this)
    this.setFocusType = this.setFocusType.bind(this)
    this.addType = this.addType.bind(this)
  }
  toggleRightColumn() {
    this.setState({ showRightColumn: !this.state.showRightColumn })
  }
  setFocusType(index) {
    this.setState({ focusType: index })
  }
  addType(name) {
    this.setState({ typeList: this.state.typeList.concat({ name: name, index: (this.state.typeList.length + 1).toString() }) })
  }
  render() {
    return (
      <div className="content" >
        <LeftColumn typeList={this.state.typeList} focusType={this.state.focusType} onTypeItemClick={this.setFocusType} addType={this.addType} />
        <CenterColumn onCenterColumnClick={this.toggleRightColumn} />
        <RightColumn show={this.state.showRightColumn} />
      </div>
    );
  }
}

export default Content;
