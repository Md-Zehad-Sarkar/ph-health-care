"use client";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import React, { useState } from "react";
import MultiSelectFieldChip from "./MultiSelectFieldChip";

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

  const { data, isLoading } = useGetAllScheduleQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return "Loading..";
  }

  const schedules = data?.schedules;

  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date Picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
          />
        </LocalizationProvider>
        <MultiSelectFieldChip schedules={schedules} />
      </PHModal>
    </div>
  );
};

export default DoctorsScheduleModal;
