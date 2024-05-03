import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, Container, Typography } from "@mui/material";

type TPropsType = {
  searchParams: {
    specialties: string;
  };
};

const DoctorsPage = async ({ searchParams }: TPropsType) => {
  let res;
  if (searchParams?.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams?.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor");
  }
  const { data } = await res.json();

  return (
    <Container>
      <Box sx={{ borderBottom: "2px dashed" }}></Box>
      <ScrollCategory specialties={searchParams?.specialties} />
      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {data?.map((doctor: Doctor, index: number) => (
          <Box key={doctor?.id}>
            <DoctorCard doctor={doctor} />

            {index === data.length - 1 ? null : <DashedLine />}
          </Box>
        ))}
        <Box>
          {data?.length === 0 && (
            <Typography color={"white"}>No Specialties Available</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DoctorsPage;
