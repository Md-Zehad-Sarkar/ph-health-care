"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal/SpecialtiesModal";
import { useState } from "react";

const SpecialtiesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsOpenModal(true)}>Create Specialty</Button>
        <SpecialtiesModal open={isOpenModal} setOpen={setIsOpenModal} />

        <TextField size="small" placeholder="Search Specialty" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
