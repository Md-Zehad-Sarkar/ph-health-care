"use client";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useEffect } from "react";
import { authKey } from "@/constant/authKey";
import { toast } from "sonner";
import { deleteCookies } from "@/services/actions/deleteCookie";

const validationSchema = z.object({
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ResetPasswordPage = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");
  const token = searchParam.get("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (values: FieldValues) => {
    const updateValues = { ...values, id };

    try {
      const res = await resetPassword(updateValues).unwrap();
      console.log("res", res);
      if (res?.status === 200) {
        toast.success("password reset success");
        localStorage.removeItem(authKey);
        deleteCookies([authKey, "refreshToken", "token"]);
        router.push("/login");
      } else {
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error) {
      toast.success("Something Went Wrong, Try Again");
    }
  };
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: { xs: 2, md: 10 },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
          Reset password
        </Typography>
      </Stack>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="newPassword"
              type="password"
              label="New Password"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Reset Password
        </Button>
      </PHForm>
    </Box>
  );
};

export default ResetPasswordPage;
