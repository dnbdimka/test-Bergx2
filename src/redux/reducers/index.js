import { combineReducers } from "redux";
import { items } from "./items";
import { error } from "./error";
import { isLoading } from "./isLoading";

export default combineReducers({
  items,
  error,
  isLoading,
});
