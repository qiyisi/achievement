import { combineReducers } from "redux";
import types from "./types";
import focusedTypeId from "./focusedTypeId";
import achievements from "./achievements";
import focusedAchievementId from "./focusedAchievementId";

export default combineReducers({
  types,
  focusedTypeId,
  achievements,
  focusedAchievementId,
});
