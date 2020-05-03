import { combineReducers } from "redux";
import controlBar from "./controlBarReducer";

const rootReducer = combineReducers({
  controlBar,
});

export default rootReducer;
