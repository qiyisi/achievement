import { combineReducers } from "redux";
import types from "./types";
import focusedType from "./focusedType";
import achievements from "./achievements";
import focusedAchievement from "./focusedAchievement";

export default combineReducers({
  types,
  focusedType,
  achievements,
  focusedAchievement,
});
