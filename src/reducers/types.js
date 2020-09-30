const types = (state = [], action) => {
  switch (action.type) {
    case 'SET_TYPES':
      return action.types
    case 'ADD_TYPE':
      return [...state, action.itemType]
    default:
      return state
  }
}

export default types