import React from 'react';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showRightColumn: true }
    this.toggleRightColumn = this.toggleRightColumn.bind(this)
  }
  toggleRightColumn() {
    this.setState({ showRightColumn: !this.state.showRightColumn })
  }
  render() {
    return (
      <div className="content" >
        <LeftColumn />
        <CenterColumn onCenterColumnClick={this.toggleRightColumn} />
        <RightColumn show={this.state.showRightColumn} />
      </div>
    );
  }
}

export default Content;
