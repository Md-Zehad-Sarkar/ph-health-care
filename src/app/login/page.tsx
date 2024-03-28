"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { storeAuthUserInfo } from "@/services/stores/auth-services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const loginUserValidationSchema = z.object({
  email: z.string().email("please enter a valid email"),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 character" }),
});

const LoginPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      if (res?.data?.accessToken) {
        storeAuthUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
        toast.success(res.message);
      } else {
        setErrorMessage(res?.message);
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
            sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" />
            </Box>
            <Box>
              <Typography>Login PH Health Care</Typography>
            </Box>
          </Stack>
          {errorMessage && (
            <Box
              sx={{ bgcolor: "red",borderRadius:'10px', textAlign: "center", p: 1 }}
            >
              <Typography sx={{color:'white'}}>{errorMessage}</Typography>
            </Box>
          )}
          <Box>
            <PHForm
              onSubmit={onSubmit}
              resolver={zodResolver(loginUserValidationSchema)}
              defaultValues={{ email: "", message: "" }}
            >
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    type="email"
                    label="Email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    type="password"
                    label="Password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end">
                <Link href="/forgot-password">Forgot password?</Link>
              </Typography>
              <Button type="submit" sx={{ margin: "10px 0px", width: "100%" }}>
                Login
              </Button>
              <Typography>
                Don&apos;t have an account?{" "}
                <Link href="/register">Register</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
