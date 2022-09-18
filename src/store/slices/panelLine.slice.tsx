import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPanelLineState } from "../../models/states/panelLine";

const initialState: IPanelLineState = {
  base: "WEB://System/http/raaynoff",
  path: "",
};

export const panelLineSlice = createSlice({
  name: "panelLine",
  initialState: initialState,
  reducers: {
    changePath(state, action: PayloadAction<string>) {
      state.path = action.payload;
    },
  },
});
