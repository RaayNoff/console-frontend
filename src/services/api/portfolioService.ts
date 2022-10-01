import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import backendEndpoints from "../../data/classes/backendEndpoints";
import { IPortfolio } from "../../models/portfolio";

interface ICreateCase {
  name: string;
  description: string;
  url: string;
}

interface IUpdateCase {
  id: number;
  name: string;
  description: string;
  url: string;
}

interface IDeleteCase {
  id: number;
}

export const portfolioService = createApi({
  reducerPath: "portfolioService",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: backendEndpoints.baseUrl,
  }),
  tagTypes: ["Portfolio"],
  endpoints: (build) => ({
    fetchAllCases: build.query<IPortfolio[], any>({
      query: () => ({
        url: backendEndpoints.portfolio,
        method: "GET",
      }),
      providesTags: ["Portfolio"],
    }),
    createCase: build.mutation<IPortfolio, ICreateCase>({
      query: ({ description, name, url }) => ({
        url: backendEndpoints.portfolio,
        method: "POST",
        body: {
          name,
          description,
          url,
          key: localStorage.getItem("key"),
        },
      }),
      invalidatesTags: ["Portfolio"],
    }),
    updateCase: build.mutation<IPortfolio, IUpdateCase>({
      query: ({ id, description, name, url }) => ({
        url: backendEndpoints.portfolio,
        method: "PUT",
        body: {
          id,
          name,
          description,
          url,
          key: localStorage.getItem("key"),
        },
      }),
      invalidatesTags: ["Portfolio"],
    }),
    deleteCase: build.mutation<IPortfolio, IDeleteCase>({
      query: ({ id }) => ({
        url: backendEndpoints.portfolio + `/${id}`,
        method: "DELETE",
        body: {
          key: localStorage.getItem("key"),
        },
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});
