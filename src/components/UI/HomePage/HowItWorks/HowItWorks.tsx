import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import howItWorks from "@/assets/how.png";
import searchIcon from "@/assets/icons/search-icon.png";
import profileIcon from "@/assets/icons/doctor-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/appointment-icon.png";
const solutionData = [
  {
    title: "Search Doctor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, labore.",
    imageSrc: searchIcon,
  },
  {
    title: "Check Doctor Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, labore.",
    imageSrc: profileIcon,
  },
  {
    title: "Schedule Appointment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, labore.",
    imageSrc: appointmentIcon,
  },
  {
    title: "Get Your Solution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, labore.",
    imageSrc: charityIcon,
  },
];

const HowItWorks = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h6" component="h5" color="primary.main" py="10px">
          How it works
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" component="h4" mb={2} fontWeight={600}>
          4 Easy Steps To Get Your Solution
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Box sx={{ py: "40px", display: "flex", gap: "20px" }}>
        <Grid
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Image
              src={howItWorks}
              alt="how it works image"
              width={700}
              height={700}
            />
          </Box>
        </Grid>
        <Grid md={6} className="grid grid-cols-2 gap-5">
          <Box
            sx={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ mb: "20px" }}>
              <Image src={solutionData[0].imageSrc} alt="search icon" />
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                {solutionData[0].title}
              </Typography>
              <Typography component="p" fontSize={18}>
                {solutionData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ mb: "20px" }}>
              <Image src={solutionData[1].imageSrc} alt="search icon" />
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                {solutionData[1].title}
              </Typography>
              <Typography component="p" fontSize={18}>
                {solutionData[1].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ mb: "20px" }}>
              <Image src={solutionData[2].imageSrc} alt="search icon" />
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                {solutionData[2].title}
              </Typography>
              <Typography component="p" fontSize={18}>
                {solutionData[2].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ mb: "20px" }}>
              <Image src={solutionData[3].imageSrc} alt="search icon" />
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                {solutionData[3].title}
              </Typography>
              <Typography component="p" fontSize={18}>
                {solutionData[3].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "30px",
          px: "40px",
          background: "linear-gradient(to right bottom, #82ff, #76CEcc)",
          my: '60px',
          borderRadius: '20px',
          color:'white'
        }}
      >
        <Box>
          <Typography variant="h3" component="h2" fontWeight={600}>
            180+
          </Typography>
          <Typography variant="h6" component="h6" fontWeight={400}>
            Expert Doctors
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" component="h2" fontWeight={600}>
            26+
          </Typography>
          <Typography variant="h6" component="h6" fontWeight={400}>
            Expert Services
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" component="h2" fontWeight={600}>
            10K+
          </Typography>
          <Typography variant="h6" component="h6" fontWeight={400}>
            Happy Patients{" "}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" component="h2" fontWeight={600}>
            150+
          </Typography>
          <Typography variant="h6" component="h6" fontWeight={400}>
            Best Award Winners{" "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
