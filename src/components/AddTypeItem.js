import React from 'react';

const AddTypeItem = ({ addType }) => {
  const onEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const name = event.target.value.trim()
      if (name) addType(name)
    }
  }
  return (< div className='type-item add-type-item' >
    <span><input className='add-type-item-input' placeholder='add' onKeyPress={onEnterKeyPress} /></span>
  </div >)
}

export default AddTypeItem;