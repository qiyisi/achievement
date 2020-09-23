import React from 'react';

class TypeItem extends React.Component {
  render() {
    return (
      <div className={['type-item', this.props.focus === this.props.data.index ? 'type-item-focus' : null].join(' ')} onClick={() => this.props.onTypeItemClick(this.props.data.index)}>
        <span>{this.props.data.name}</span>
      </div>
    )
  }
}

export default TypeItem;