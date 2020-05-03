import { combineReducers } from "redux";
import controlBar from "./controlBarReducer";
import instrumentStatus from "./instrumentStatusReducer";

const rootReducer = combineReducers({
  controlBar,
  instrumentStatus,
});

export default rootReducer;
