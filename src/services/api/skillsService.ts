import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import backendEndpoints from "../../data/classes/backendEndpoints";
import { ISkill } from "../../models/skill";

export const skillsService = createApi({
  reducerPath: "skillsService",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: backendEndpoints.baseUrl,
  }),
  tagTypes: ["Skills"],
  endpoints: (build) => ({
    fetchAllSkills: build.query<ISkill[], any>({
      query: () => ({
        url: backendEndpoints.skills,
        method: "GET",
      }),
      providesTags: ["Skills"],
    }),
  }),
});
