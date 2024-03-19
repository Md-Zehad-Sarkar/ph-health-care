import assets from "@/assets";
import chooseUs from "@/assets/choose-us.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          my: "30px",
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          fontWeight={600}
          color="primary.main"
        >
          Why Us
        </Typography>
        <Typography variant="h3" component="h2" fontWeight={300}>
          Why Choose Us
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "20px",my:'40px' }}>
        <Grid md={6}>
          <Box
            sx={{
              backgroundColor: "rgba(245,245,245,1)",
              borderRadius: "10px 10px 100px 10px",
              padding: "20px",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="award"
                  width={60}
                  height={60}
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h3" fontWeight={500}>
                  {servicesData[0].title}
                </Typography>
                <Typography component="p" fontWeight={300} width={500}>
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245,245,245,1)",
              borderRadius: "10px 100px 10px 10px",
              padding: "20px",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="award"
                  width={60}
                  height={60}
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h3" fontWeight={500}>
                  {servicesData[1].title}
                </Typography>
                <Typography component="p" fontWeight={300} width={500}>
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245,245,245,1)",
              borderRadius: "10px 10px 100px 10px",
              padding: "20px",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  alt="award"
                  width={60}
                  height={60}
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h3" fontWeight={500}>
                  {servicesData[2].title}
                </Typography>
                <Typography component="p" fontWeight={300} width={500}>
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245,245,245,1)",
              borderRadius: "10px 100px 10px 10px",
              padding: "20px",
              margin: "20px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  alt="award"
                  width={60}
                  height={60}
                />
              </Box>
              <Box>
                <Typography variant="h4" component="h3" fontWeight={500}>
                  {servicesData[3].title}
                </Typography>
                <Typography component="p" fontWeight={300} width={500}>
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              // margin: "0 auto",
              alignItems: "center",
            }}
          >
            <Image src={chooseUs} alt="why choose us" width={450} />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
