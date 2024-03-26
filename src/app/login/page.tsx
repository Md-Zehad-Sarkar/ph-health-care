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

const LoginPage = () => {
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
            <form>
              <Grid container spacing={2} sx={{my:2}}>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Password"
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end">
                <Link href="/forgot-password">Forgot password?</Link>
              </Typography>
              <Button sx={{ margin: "10px 0px", width: "100%" }}>Login</Button>
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
