import React from 'react';
import TypeItemListContainer from '../containers/TypeItemListContainer';
import AddTypeItem from './AddTypeItem';

class LeftColumn extends React.Component {
  render() {
    return (
      <div className="left-column">
        <div className="type-item-container" >
          {/* {this.props.typeList.map(item => (<TypeItem data={item} focusType={this.props.focusType} onTypeItemClick={this.props.onTypeItemClick} key={item.id} />))} */}
          <TypeItemListContainer />
          <AddTypeItem addType={this.props.addType} />
        </div>
      </div>
    );
  }
}

export default LeftColumn;
