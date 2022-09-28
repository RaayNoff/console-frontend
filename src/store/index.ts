import { configureStore } from "@reduxjs/toolkit";
import { portfolioService } from "../services/api/portfolioService";
import { skillsService } from "../services/api/skillsService";
import { rootReducer } from "./slices/root";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(skillsService.middleware)
      .concat(portfolioService.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
