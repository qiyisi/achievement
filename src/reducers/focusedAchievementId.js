const focusedAchievementId = (state = null, action) => {
  switch (action.type) {
    case "SET_FOCUSED_ACHIEVEMENT_ID":
      return action.id;
    default:
      return state;
  }
};

export default focusedAchievementId;
