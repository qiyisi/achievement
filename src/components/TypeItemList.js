import React from 'react'
import TypeItem from './TypeItem'

const TypeItemList = ({ typeItems = [{ name: 'test', id: '1' }], focusType, setFocusTypeItem }) => (
  <div>
    {typeItems.map(item => (<TypeItem {...item} focusType onClick={() => setFocusTypeItem(item.id)} key={item.id} />))}
  </div>
)

export default TypeItemList