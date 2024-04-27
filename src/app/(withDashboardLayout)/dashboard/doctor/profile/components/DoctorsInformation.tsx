import { Box, Container, Stack, Typography, styled } from "@mui/material";
export const StyleInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const DoctorsInformation = ({ profileData }: any) => {
  return (
    <div>
      {/*   Basic Information */}
      <Typography variant="h5" color={"primary.main"}>
        Basic Information
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={2}
        flexWrap={"wrap"}
        mt={2}
        mb={2}
      >
        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Role
          </Typography>
          <Typography>{profileData?.role}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Name
          </Typography>
          <Typography>{profileData?.name}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Email
          </Typography>
          <Typography>{profileData?.email}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Gender
          </Typography>
          <Typography>{profileData?.gender}</Typography>
        </StyleInformationBox>
      </Stack>

      {/* personal Information */}
      <Typography variant="h5" color={"primary.main"}>
        Personal Information
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={2}
        flexWrap={"wrap"}
        mt={2}
        mb={2}
      >
        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Appointment Fee
          </Typography>
          <Typography>{profileData?.apointmentFee}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Qualification
          </Typography>
          <Typography>{profileData?.qualification}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Current Working Place
          </Typography>
          <Typography>{profileData?.currentWorkingPlace}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Joined
          </Typography>
          <Typography>
            {new Date(profileData?.createdAt).toLocaleDateString()}
          </Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Current Status
          </Typography>
          <Typography>{profileData?.status}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Average Rating
          </Typography>
          <Typography>{profileData?.averageRating}</Typography>
        </StyleInformationBox>

        <StyleInformationBox>
          <Typography variant="caption" color={"secondary"}>
            Experience
          </Typography>
          <Typography>{profileData?.experience}</Typography>
        </StyleInformationBox>
      </Stack>
    </div>
  );
};

export default DoctorsInformation;
