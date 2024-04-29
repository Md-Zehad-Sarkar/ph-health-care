"use client";
import {
  Box,
  Button,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DoctorsScheduleModal from "./components/DoctorsScheduleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
} from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utls/dateFormatter";
import dayjs from "dayjs";

type TProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorSchedulesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  //delete doctors schedule
  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  //for pagination
  let query: Record<string, any> = {};

  query["page"] = page;
  query["limit"] = limit;

  //get doctors schedule for doctor
  const { data: doctorsSchedules, isLoading } =
    useGetAllDoctorSchedulesQuery(query);

  const schedules = doctorsSchedules?.doctorSchedules;
  //for pagination data
  const meta = doctorsSchedules?.meta;

  //pagination page count
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }

  useEffect(() => {
    const updateData = schedules?.map((schedule: any, index: number) => {
      return {
        sl: index + 1,
        name: schedule?.doctor?.name,
        id: schedule?.scheduleId,
        // id: schedule?.doctorId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  //need implement delete doctor schedule
  const handleDelete = async (id: string) => {
    // console.log("deleted id", id);
    const res = await deleteDoctorSchedule(id);
  };

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
          <IconButton onClick={() => handleDelete(row?.id)} aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
            <DataGrid
              rows={allSchedule ?? []}
              columns={columns}
              hideFooterPagination
              slots={{
                footer: () => {
                  return (
                    <Box sx={{ my: 2 }}>
                      <Pagination
                        color="primary"
                        count={pageCount}
                        page={page}
                        onChange={handleChange}
                      />
                    </Box>
                  );
                },
              }}
            />
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
