import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import backendEndpoints from "../../data/classes/backendEndpoints";
import { ISkill } from "../../models/skill";

interface IDelete {
  id: number;
}

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
    createSkill: build.mutation<ISkill, FormData>({
      query: (formData) => ({
        url: backendEndpoints.skills,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Skills"],
    }),
    deleteSkill: build.mutation<ISkill, IDelete>({
      query: ({ id }) => ({
        url: backendEndpoints.skills + `/${id}`,
        method: "DELETE",
        body: {
          key: localStorage.getItem("key"),
        },
      }),
      invalidatesTags: ["Skills"],
    }),
    updateSkill: build.mutation<ISkill, FormData>({
      query: (formData) => ({
        url: backendEndpoints.skills,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Skills"],
    }),
  }),
});
