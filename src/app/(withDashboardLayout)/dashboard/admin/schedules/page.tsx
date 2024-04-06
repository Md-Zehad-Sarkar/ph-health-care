"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ScheduleModal from "./components/Schedule/ScheduleModal";
import { useEffect, useState } from "react";
import {
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
} from "@/redux/api/scheduleApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TSchedule } from "@/types/schedule";
import { dateFormatter } from "@/utls/dateFormatter";
import dayjs from "dayjs";
import { toast } from "sonner";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allSchedules, setAllSchedules] = useState<any>([]);

  const [deleteSchedule] = useDeleteScheduleMutation();
  const { data, isLoading } = useGetAllScheduleQuery({});

  const schedules = data?.schedules;
  const meta = data?.meta;

  useEffect(() => {
    const updatedSchedules = schedules?.map((schedule: TSchedule) => ({
      id: schedule?.id,
      startDate: dateFormatter(schedule?.startDate),
      endDate: dateFormatter(schedule?.endDate),
      startTime: dayjs(schedule?.startDate).format("hh:mm a"),
      endTime: dayjs(schedule?.endDate).format("hh:mm a"),
    }));
    setAllSchedules(updatedSchedules);
  }, [schedules]);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id).unwrap();
      if (res?.id) {
        toast.success("Schedule delete successfully");
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
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
          <Box>
            <IconButton
              onClick={() => handleDelete(row?.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon sx={{}} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack>
        <Button onClick={() => setIsModalOpen(true)} sx={{ width: "220px" }}>
          Create Schedule
        </Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Stack>
      <Box>
        {!isLoading ? (
          <Box>
            <DataGrid rows={allSchedules ?? []} columns={columns} />
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SchedulesPage;
