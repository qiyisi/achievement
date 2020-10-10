const types = (state = [], action) => {
  switch (action.type) {
    case "SET_TYPES":
      return action.types;
    case "ADD_TYPE":
      return [...state, action.itemType];
    case "DELETE_TYPE":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_TYPE":
      return state.map((item) => {
        if (item.id === action.id) {
          item = { ...item, ...action.data };
        }
        return item;
      });
    default:
      return state;
  }
};

export default types;
