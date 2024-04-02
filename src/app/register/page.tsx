"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { modifyFormPayload } from "@/utls/modifyFormPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeAuthUserInfo } from "@/services/stores/auth-services";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const registerUserValidationSchema = z.object({
  password: z.string().min(6, { message: "password minimum 6 character" }),
  patient: z.object({
    name: z.string().min(2, { message: "name is required" }),
    email: z.string().email("please type valid email"),
    contactNumber: z.string().regex(/^\d{11}$/, "provide a valid number"),
    address: z.string().min(2, { message: "please give your address" }),
  }),
});

const defaultValues = {
  "patient.name": "",
  "patient.email": "",
  password: "",
  "patient.contactNumber": "",
  "patient.address": "",
};

const RegisterPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FieldValues) => {
    const userData = modifyFormPayload(data);

    try {
      const res = await registerPatient(userData);

      if (res?.data?.id) {
        toast.success(res?.message);
      } else {
        setErrorMessage(res?.message);
      }

      const result = await loginUser({
        email: data.patient.email,
        password: data.password,
      });

      if (result?.data?.accessToken) {
        storeAuthUserInfo({ accessToken: result?.data?.accessToken });
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error(error.message);
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
          {errorMessage && (
            <Box
              sx={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography>{errorMessage}</Typography>
            </Box>
          )}
          <Box>
            <PHForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerUserValidationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput
                    type="text"
                    label="Name"
                    fullWidth={true}
                    name="patient.name"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="email"
                    label="Email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="password"
                    label="Password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="tel"
                    label="Contact no"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="text"
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
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
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
