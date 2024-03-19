import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", py: 16 }}>
      <Box sx={{ flex: 1, width: "700px", position: "relative" }}>
        <Box sx={{ position: "absolute" }}>
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color={"primary.main"}
        >
          Prevent Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{ width: "600px" }}
          my={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error
          nobis rerum? Asperiores veritatis provident voluptatum. Qui sit
          officia accusantium officiis! Eos asperiores veniam sunt nesciunt
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          padding: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", mt: "-40px", left: "140px" }}>
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={6}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", mt: "220px", left: "110px" }}>
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={280}
            height={250}
          />
        </Box>
        <Box
          sx={{ position: "absolute", bottom: "-20px", right: "-40px" }}
          zIndex={-1}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
