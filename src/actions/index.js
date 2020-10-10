export const setTypes = (types) => ({
  type: "SET_TYPES",
  types,
});

export const setFocusedTypeId = (id) => ({
  type: "SET_FOCUSED_TYPE_ID",
  id,
});

export const updateType = (id, data) => ({
  type: "UPDATE_TYPE",
  id,
  data,
});

export const setAchievements = (achievements) => ({
  type: "SET_ACHIEVEMENTS",
  achievements,
});

export const setFocusedAchievementId = (id) => ({
  type: "SET_FOCUSED_ACHIEVEMENT_ID",
  id,
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
