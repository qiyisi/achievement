const draggedAchievementId = (state = null, action) => {
  switch (action.type) {
    case "SET_DRAGGED_ACHIEVEMENT_ID":
      return action.id;
    default:
      return state;
  }
};

export default draggedAchievementId;
