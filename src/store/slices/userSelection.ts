import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserSelection, Language } from "../../models/states/userSelection";

const initialState: IUserSelection = {
  language: Language.EN,
};

export const userSelection = createSlice({
  name: "userSelection",
  initialState: initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
  },
});
