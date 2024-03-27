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
import { loginUser } from "@/services/actions/loginUser";
import { storeAuthUserInfo } from "@/services/stores/auth-services";
export type TLoginUser = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginUser>();

  const onSubmit: SubmitHandler<TLoginUser> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.data?.accessToken) {
        storeAuthUserInfo({ accessToken: res?.data?.accessToken });
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
            sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" />
            </Box>
            <Box>
              <Typography>Login PH Health Care</Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    {...register("email")}
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
