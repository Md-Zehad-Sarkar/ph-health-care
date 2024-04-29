import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { Gender } from "@/constant/gender";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import PHSelect from "@/forms/PHSelect";
import { useCreateDoctorMutation } from "@/redux/api/doctorsApi";
import { modifyFormPayload } from "@/utls/modifyFormPayload";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TDoctorModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    apointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
  password: "",
};

const DoctorsModal = ({ open, setOpen }: TDoctorModalProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleCreateDoctor = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyFormPayload(values);
    try {
      const res = await createDoctor(data).unwrap();

      if (res?.id) {
        toast("Doctor Created Successfully");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <PHForm onSubmit={handleCreateDoctor} defaultValues={defaultValues}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.name"
              type="text"
              label="Doctor Name"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.email"
              type="text"
              label="Email"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.contactNumber"
              type="text"
              label="Contact Number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.address"
              type="text"
              label="Address "
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.registrationNumber"
              type="number"
              label="Registration Number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHSelect
              name="doctor.gender"
              items={Gender}
              type="text"
              label="Gender"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.apointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.qualification"
              type="text"
              label="Qualification"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.currentWorkingPlace"
              type="text"
              label="Current Working Place"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <PHInput
              name="doctor.designation"
              type="text"
              label="Designation"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button type="submit">Create</Button>
        </Box>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorsModal;
