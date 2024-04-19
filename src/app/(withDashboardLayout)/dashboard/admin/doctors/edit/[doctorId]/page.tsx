"use client";
import { Gender } from "@/constant/gender";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import PHSelect from "@/forms/PHSelect";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  const id = params?.doctorId;
  const { data, isLoading } = useGetSingleDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();
  const router = useRouter();

  if (isLoading) {
    return "Loading...";
  }

  const handleUpdateDoctor = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;

    try {
      const res = await updateDoctor({ id: id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully");
        router.push("/dashboard/admin/doctors");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
      <Typography component="h3" variant="h3" mb={2}>
        doctor update page
      </Typography>
      <PHForm onSubmit={handleUpdateDoctor} defaultValues={defaultValues}>
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
        </Grid>
        <Box mt={2}>
          <Button type="submit">Update</Button>
        </Box>
      </PHForm>
    </Box>
  );
};

export default DoctorUpdatePage;
