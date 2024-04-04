"use client";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorsModal from "./components/DoctorsModal/DoctorsModal";
import { useState } from "react";

const DoctorsPAge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={()=>setIsModalOpen(true)}>Create Doctor</Button>
        <DoctorsModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Doctors" />
      </Stack>
    </Box>
  );
};

export default DoctorsPAge;
