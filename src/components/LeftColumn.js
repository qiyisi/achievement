import React from 'react';
import TypeItem from './TypeItem';
import AddTypeItem from './AddTypeItem';

const LeftColumn = ({ types, focusedType, setFocusedType, addType }) => (
  <div className="left-column">
    <div className="type-item-container" >
      <div>
        {types && types.map(item => (<TypeItem {...item} focusedType={focusedType} onClick={() => setFocusedType(Object.assign({}, item))} key={item.id} />))}
      </div>
      <AddTypeItem addType={addType} />
    </div>
  </div>
)

export default LeftColumn;
