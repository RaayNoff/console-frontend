import { configureStore } from "@reduxjs/toolkit";
import { skillsService } from "../services/api/skillsService";
import { rootReducer } from "./slices/root";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillsService.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
