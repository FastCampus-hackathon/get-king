import { combineReducers } from "redux";
import compReducer from "./comp";
import scrapReducer from "./scrap";
import announcementReducer from "./announcement";

const rootReducer = combineReducers({
  scrap: scrapReducer,
  comp: compReducer,
  announcement: announcementReducer,
});

export default rootReducer;
