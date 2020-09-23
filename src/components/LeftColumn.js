import React from 'react';
import TypeItem from './TypeItem';
import AddItem from './AddItem';

class LeftColumn extends React.Component {
  render() {
    return (
      <div className="left-column">
        <div className="type-item-container" >
          {this.props.typeList.map(item => (<TypeItem data={item} focus={this.props.focusType} onTypeItemClick={this.props.onTypeItemClick} key={item.index} />))}
          <AddItem addType={this.props.addType} />
        </div>
      </div>
    );
  }
}

export default LeftColumn;
