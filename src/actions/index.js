// type

export const setTypes = (types) => ({
  type: "SET_TYPES",
  types,
});

export const updateType = (id, data) => ({
  type: "UPDATE_TYPE",
  id,
  data,
});

export const addType = (itemType) => ({
  type: "ADD_TYPE",
  itemType,
});

export const deleteType = (id) => ({
  type: "DELETE_TYPE",
  id,
});

// focusedTypeId

export const setFocusedTypeId = (id) => ({
  type: "SET_FOCUSED_TYPE_ID",
  id,
});

// achievement

export const setAchievements = (achievements) => ({
  type: "SET_ACHIEVEMENTS",
  achievements,
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

// achievementId

export const setFocusedAchievementId = (id) => ({
  type: "SET_FOCUSED_ACHIEVEMENT_ID",
  id,
});

// setting

export const updateSettings = (data) => ({
  type: "UPDATE_SETTINGS",
  data,
});

// draggedTypeId

export const setDraggedTypeId = (id) => ({
  type: "SET_DRAGGED_TYPE_ID",
  id,
});

// draggedAchievementId

export const setDraggedAchievementId = (id) => ({
  type: "SET_DRAGGED_ACHIEVEMENT_ID",
  id,
});
