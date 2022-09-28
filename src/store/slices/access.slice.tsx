import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
};

export const accessSlice = createSlice({
  name: "access",
  initialState: initialState,
  reducers: {
    changeAccess(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});
