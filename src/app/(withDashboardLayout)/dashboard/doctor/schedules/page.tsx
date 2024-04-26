"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoctorsScheduleModal from "./components/DoctorsScheduleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utls/dateFormatter";
import dayjs from "dayjs";
import { TSchedule } from "@/types/schedule";

type TProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorSchedulesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  //get doctors schedule for doctor
  const { data: doctorsSchedules, isLoading } = useGetAllDoctorSchedulesQuery(
    {}
  );

  const schedules = doctorsSchedules?.doctorSchedules;
  console.log("schedules", schedules);
  console.log("allSchedule", allSchedule);

  useEffect(() => {
    const updateData = schedules?.map((schedule: any, index: number) => {
      return {
        sl: index + 1,
        name: schedule?.doctor?.name,
        id: schedule?.doctorId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  //need implement delete doctor schedule
  // const handleDelete = (id) => {
  //   console.log(id);
  // };

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "name", headerName: "Name" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsOpenModal(true)}>
          Create Doctor Schedule
        </Button>

        <DoctorsScheduleModal open={isOpenModal} setOpen={setIsOpenModal} />
      </Stack>

      <Box my={2} mt={4}>
        {!isLoading ? (
          <Box>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
