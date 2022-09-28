import { combineReducers } from "redux";
import { portfolioService } from "../../services/api/portfolioService";
import { skillsService } from "../../services/api/skillsService";
import { panelLineSlice } from "./panelLine.slice";
import { userSelection } from "./userSelection";

export const rootReducer = combineReducers({
  userSelection: userSelection.reducer,
  panelLine: panelLineSlice.reducer,
  [skillsService.reducerPath]: skillsService.reducer,
  [portfolioService.reducerPath]: portfolioService.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
