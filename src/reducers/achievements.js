const achievements = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACHIEVEMENTS':
      return action.achievements
    default:
      return state
  }
}

export default achievements