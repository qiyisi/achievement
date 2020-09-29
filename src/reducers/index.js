export default (state = {}, action) => {
  console.log('reducers', action)
  switch (action.type) {
    case 'SET_FOCUS_TYPE_ITEM':
      state.focusType = action.id
      return state
    default:
      return state
  }
}
