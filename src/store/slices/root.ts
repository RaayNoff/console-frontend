import { combineReducers } from "redux";
import { portfolioService } from "../../services/api/portfolioService";
import { skillsService } from "../../services/api/skillsService";
import { accessSlice } from "./access.slice";
import { panelLineSlice } from "./panelLine.slice";
import { userSelection } from "./userSelection";

export const rootReducer = combineReducers({
  userSelection: userSelection.reducer,
  panelLine: panelLineSlice.reducer,
  access: accessSlice.reducer,
  [skillsService.reducerPath]: skillsService.reducer,
  [portfolioService.reducerPath]: portfolioService.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
