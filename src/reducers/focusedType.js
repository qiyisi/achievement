const focusedType = (state = null, action) => {
  switch (action.type) {
    case "SET_FOCUSED_TYPE":
      return action.focusedType;
    default:
      return state;
  }
};

export default focusedType;
