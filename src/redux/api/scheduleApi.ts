import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { TMeta } from "@/types";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    getAllSchedule: build.query({
      query: (args: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return { schedules: response, meta };
      },
      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const { useCreateScheduleMutation, useGetAllScheduleQuery,useDeleteScheduleMutation } =
  scheduleApi;
