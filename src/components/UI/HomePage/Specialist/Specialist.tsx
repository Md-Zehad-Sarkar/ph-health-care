import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box py={8}>
        <Box>
          <Typography variant="h4" fontWeight={600} component="h1">
            Explore Treatments Across Specialties
          </Typography>
          <Typography variant="h6" component="p">
            Find experienced doctors across all Specialties
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties?.slice(0, 6).map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                width: "150px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
            >
              <Box>
                <Image
                  src={specialty?.icon}
                  alt="icon"
                  width={100}
                  height={100}
                />
              </Box>
              <Typography variant="h6" component="p" textAlign="center" mt={2}>
                {specialty.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Box mt={2} textAlign="center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
