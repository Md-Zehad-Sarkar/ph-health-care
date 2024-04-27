"use client";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import React, { useState } from "react";
import MultiSelectFieldChip from "./MultiSelectFieldChip";
import { Box, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorsScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  let query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  // get doctors schedule from created by admin
  const { data, isLoading } = useGetAllScheduleQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  // create doctor schedule for doctor
  const [createDoctorSchedule,{isLoading:loading}] = useCreateDoctorScheduleMutation();

  if (isLoading) {
    return "Loading..";
  }

  const schedules = data?.schedules;

  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedScheduleIds,
      }).unwrap();

      setOpen(false);

      if (res?.count > 0) {
        toast.success("Doctors Schedule Create Successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <Stack direction="column" style={{ gap: "15px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Picker"
              value={dayjs(selectedDate)}
              onChange={(newValue) =>
                setSelectedDate(dayjs(newValue).toISOString())
              }
            />
          </LocalizationProvider>

          <MultiSelectFieldChip
            schedules={schedules}
            selectedScheduleIds={selectedScheduleIds}
            setSelectedScheduleIds={setSelectedScheduleIds}
          />

          <LoadingButton
            size="small"
            onClick={onSubmit}
            loading={loading}
            loadingIndicator="Submitting..."
            variant="contained"
          >
            <span>Submitting</span>
          </LoadingButton>
        </Stack>
      </PHModal>
    </div>
  );
};

export default DoctorsScheduleModal;
