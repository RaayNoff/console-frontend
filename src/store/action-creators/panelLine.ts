import { AppDispatch } from "..";
import { panelLineSlice } from "../slices/panelLine.slice";

export const changePath = (path: string) => (dispatch: AppDispatch) => {
  dispatch(panelLineSlice.actions.changePath(path));
};
