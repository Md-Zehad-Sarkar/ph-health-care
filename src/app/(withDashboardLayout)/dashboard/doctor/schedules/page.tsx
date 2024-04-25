"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DoctorsScheduleModal from "./components/DoctorsScheduleModal";

type TProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorSchedulesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsOpenModal(true)}>
          Create Doctor Schedule
        </Button>

        <DoctorsScheduleModal open={isOpenModal} setOpen={setIsOpenModal} />
      </Stack>
    </Box>
  );
};

export default DoctorSchedulesPage;
