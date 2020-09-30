import React from 'react';

const TypeItem = ({ name, id, focusedType, onClick }) => (
  <div className={['type-item', (focusedType && focusedType.id === id) ? 'type-item-focus' : null].join(' ')} onClick={onClick}>
    <span>{name} </span>
  </div>
)

export default TypeItem;