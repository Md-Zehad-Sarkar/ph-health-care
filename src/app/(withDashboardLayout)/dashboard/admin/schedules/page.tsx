'use client'
import { Box, Button, Stack } from "@mui/material";
import ScheduleModal from "./components/Schedule/ScheduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Stack>
        <Button onClick={() => setIsModalOpen(true)} sx={{width:'220px'}}>Create Schedule</Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Stack>
    </Box>
  );
};

export default SchedulesPage;
