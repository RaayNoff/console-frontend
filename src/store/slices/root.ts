import { combineReducers } from "redux";
import { panelLineSlice } from "./panelLine.slice";

export const rootReducer = combineReducers({
  panelLine: panelLineSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
