import React from 'react';

class TypeItem extends React.Component {
  render() {
    return (
      <div className={['type-item', (this.props.focusType && this.props.focusType.id === this.props.data.id) ? 'type-item-focus' : null].join(' ')} onClick={() => this.props.onTypeItemClick(this.props.data.id)}>
        <span>{this.props.data.name}</span>
      </div>
    )
  }
}

export default TypeItem;