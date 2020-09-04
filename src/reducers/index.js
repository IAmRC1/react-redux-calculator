import { combineReducers } from "redux";
import { calcReducer } from "./calc.reducer";

export default combineReducers({ 
  calc: calcReducer,
 });
