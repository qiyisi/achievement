const types = (state = [], action) => {
  switch (action.type) {
    case "SET_TYPES":
      return action.types;
    case "ADD_TYPE":
      return [...state, action.itemType];
    case "DELETE_TYPE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default types;
