const achievements = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACHIEVEMENTS':
      return action.achievements
    case 'ADD_ACHIEVEMENT':
      return [...state, action.achievement]
    case 'TOGGLE_ACHIEVEMENT':
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = action.completed
        }
        return item
      })
    case 'DELETE_ACHIEVEMENT':
      return state.filter(item => item.id !== action.id)
    case 'UPDATE_ACHIEVEMENT':
      return state.map(item => {
        if (item.id === action.id) {
          item = { ...item, ...action.data }
        }
        return item
      })
    default:
      return state
  }
}

export default achievements