const focusedAchievement = (state = null, action) => {
  switch (action.type) {
    case 'SET_FOCUSED_ACHIEVEMENT':
      console.log(action)
      return action.focusedAchievement
    default:
      return state
  }
}

export default focusedAchievement