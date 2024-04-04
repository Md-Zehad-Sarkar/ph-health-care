import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

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
  }),
});

export const { useCreateScheduleMutation } = scheduleApi;
