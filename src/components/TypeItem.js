import React from 'react';

// class TypeItem extends React.Component {
//   render() {
//     return (
//       <div className={['type-item', (this.props.focusType && this.props.focusType.id === this.props.data.id) ? 'type-item-focus' : null].join(' ')} onClick={() => this.props.onTypeItemClick(this.props.data.id)}>
//         <span>{this.props.data.name}</span>
//       </div>
//     )
//   }
// }

const TypeItem = ({ name, id, focusType, onClick }) => (
  <div className={['type-item', (focusType && focusType.id === id) ? 'type-item-focus' : null].join(' ')} onClick={onClick}>
    <span>{name}</span>
  </div>
)

export default TypeItem;