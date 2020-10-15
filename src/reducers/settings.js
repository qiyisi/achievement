const settings = (
  state = { showHiddenTypeItems: false, showCompletedAchievements: false },
  action
) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default settings;
