export const setTypes = (types) => ({
  type: "SET_TYPES",
  types,
});

export const setFocusedType = (focusedType) => ({
  type: "SET_FOCUSED_TYPE",
  focusedType,
});

export const setAchievements = (achievements) => ({
  type: "SET_ACHIEVEMENTS",
  achievements,
});

export const setFocusedAchievement = (focusedAchievement) => ({
  type: "SET_FOCUSED_ACHIEVEMENT",
  focusedAchievement,
});

export const updateFocusedAchievement = (data) => ({
  type: "UPDATE_FOCUSED_ACHIEVEMENT",
  data,
});

export const deleteFocusedAchievement = () => ({
  type: "DELETE_FOCUSED_ACHIEVEMENT",
});

export const addType = (itemType) => ({
  type: "ADD_TYPE",
  itemType,
});

export const deleteType = (id) => ({
  type: "DELETE_TYPE",
  id,
});

export const addAchievement = (achievement) => ({
  type: "ADD_ACHIEVEMENT",
  achievement,
});

export const toggleAchievement = (id, completed) => ({
  type: "TOGGLE_ACHIEVEMENT",
  id,
  completed,
});

export const deleteAchievement = (id) => ({
  type: "DELETE_ACHIEVEMENT",
  id,
});

export const updateAchievement = (id, data) => ({
  type: "UPDATE_ACHIEVEMENT",
  id,
  data,
});
