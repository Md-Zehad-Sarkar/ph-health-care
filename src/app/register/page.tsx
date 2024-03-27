"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormPayload } from "@/utls/registerFormPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterForm {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterForm>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IPatientRegisterForm> = async (data) => {
    const userData = registerFormPayload(data);
    try {
      const res = await registerPatient(userData);

      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 4,
            boxShadow: 1,
            borderRadius: "10px",
          }}
        >
          <Stack
            sx={{ justifyContent: "center", alignItems: "center", gap: 2 }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography>Patient Register</Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Name"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="tel"
                    label="Contact no"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Address"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button type="submit" sx={{ margin: "10px 0px", width: "100%" }}>
                Register
              </Button>
              <Box>
                <Typography>
                  Do you already have an account?{" "}
                  <Link href="/login">Login</Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
