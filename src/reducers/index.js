import { combineReducers } from "redux";
import types from "./types";
import focusedTypeId from "./focusedTypeId";
import achievements from "./achievements";
import focusedAchievementId from "./focusedAchievementId";
import settings from "./settings";
import draggedTypeId from "./draggedTypeId";
import draggedAchievementId from "./draggedAchievementId";

export default combineReducers({
  types,
  focusedTypeId,
  achievements,
  focusedAchievementId,
  settings,
  draggedTypeId,
  draggedAchievementId,
});
