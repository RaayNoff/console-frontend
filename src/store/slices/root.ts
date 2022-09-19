import { combineReducers } from "redux";
import { panelLineSlice } from "./panelLine.slice";
import { userSelection } from "./userSelection";

export const rootReducer = combineReducers({
	userSelection: userSelection.reducer,
  panelLine: panelLineSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
