const focusedTypeId = (state = null, action) => {
  switch (action.type) {
    case "SET_FOCUSED_TYPE_ID":
      return action.id;
    default:
      return state;
  }
};

export default focusedTypeId;
