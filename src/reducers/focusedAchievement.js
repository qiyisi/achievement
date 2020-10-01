const focusedAchievement = (state = null, action) => {
  switch (action.type) {
    case 'SET_FOCUSED_ACHIEVEMENT':
      return action.focusedAchievement
    case 'UPDATE_FOCUSED_ACHIEVEMENT':
      return { ...state, ...action.data }
    case 'DELETE_FOCUSED_ACHIEVEMENT':
      return null
    default:
      return state
  }
}

export default focusedAchievement