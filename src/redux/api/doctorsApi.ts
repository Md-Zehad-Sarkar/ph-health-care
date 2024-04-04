import { TDoctorData } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { TMeta } from "@/types";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctors],
    }),

    getAllDoctor: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TDoctorData[], meta: TMeta) => {
        return { doctors: response, meta };
      },
      providesTags: [tagTypes.doctors],
    }),

    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctors],
    }),
  }),
});

export const { useCreateDoctorMutation, useGetAllDoctorQuery,useDeleteDoctorMutation } = doctorsApi;
