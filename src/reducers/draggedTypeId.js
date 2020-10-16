const draggedTypeId = (state = null, action) => {
  switch (action.type) {
    case "SET_DRAGGED_TYPE_ID":
      return action.id;
    default:
      return state;
  }
};

export default draggedTypeId;
