"use client";

import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { Gender } from "@/constant/gender";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import PHSelect from "@/forms/PHSelect";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectChip";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TProfileUpdateModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

// validation schema for zod
const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  apointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const ProfileUpdateModal = ({
  open,
  setOpen,
  id,
}: TProfileUpdateModalProps) => {
  //get single doctor
  const {
    data: doctorData,
    refetch,
    isLoading,
    isSuccess,
  } = useGetSingleDoctorQuery(id);

  //get all specialties
  const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);

  //update doctor
  const [updateDoctor, { isLoading: isUpdating }] = useUpdateDoctorMutation();

  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  useEffect(() => {
    if (!isSuccess) return;
    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties?.map((sp: any) => {
        return sp?.specialtiesId;
      })
    );
  }, [isSuccess, doctorData?.doctorSpecialties]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const onSubmit = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds.map((specialtiesId) => ({
      specialtiesId,
      isDeleted: false,
    }));

    //exclude field which are not updatable
    const excludeFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    //updated fields
    const updatedFields = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludeFields.includes(key);
      })
    );

    updatedFields.specialties = specialties;

    try {
      const res = await updateDoctor({ body: updatedFields, id });
      console.log("res", res);
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Update Doctor Profile"
    >
      <Box>User update profile</Box>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={doctorData}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="name"
              type="text"
              label="Doctor Name"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput name="email" type="text" label="Email" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="contactNumber"
              type="text"
              label="Contact Number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="address"
              type="text"
              label="Address "
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="registrationNumber"
              type="number"
              label="Registration Number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHSelect
              name="gender"
              items={Gender}
              type="text"
              label="Gender"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="apointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="qualification"
              type="text"
              label="Qualification"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="currentWorkingPlace"
              type="text"
              label="Current Working Place"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="designation"
              type="text"
              label="Designation"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <MultipleSelectChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </Grid>
        </Grid>
        <Button sx={{ marginTop: "10px" }} type="submit" variant="contained">
          Update
        </Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default ProfileUpdateModal;
