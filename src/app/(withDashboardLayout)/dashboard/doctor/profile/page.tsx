"use client";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfileApi";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import DoctorsInformation from "./components/DoctorsInformation";
import AutoFileUploader from "@/forms/AutoFileUploader";

const ProfilePage = () => {
  const { data: profileData, isLoading } = useGetMYProfileQuery(undefined);
  //updating profile photo
  const [updateMYProfile, { isLoading: isUpdating }] =
    useUpdateMYProfileMutation();

  if (isLoading) {
    return "Loading...";
  }

  const onFileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    await updateMYProfile(formData);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={profileData?.profilePhoto}
              alt="user profile photo"
              height={300}
              width={400}
            />
          </Box>

          <Box sx={{mt:'20px'}}>
            {/* Image Uploader for updating profile picture */}
            {isUpdating ? (
              "Updating"
            ) : (
              <AutoFileUploader
                  name="file"
                  variant="text"
                  onFileUpload={onFileUploadHandler}
                  label="UpLoad Your Profile Picture"
                  sx={{width:'100%',fontWeight:500}}
              />
            )}
          </Box>
        </Grid>

        <Grid xs={12} md={8}>
          <DoctorsInformation profileData={profileData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
