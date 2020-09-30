const focusedAchievement = (state = null, action) => {
  switch (action.type) {
    case 'SET_FOCUSED_ACHIEVEMENT':
      return action.focusedAchievement
    default:
      return state
  }
}

export default focusedAchievement