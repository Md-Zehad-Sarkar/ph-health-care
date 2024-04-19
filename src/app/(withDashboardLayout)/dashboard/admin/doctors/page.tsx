"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DoctorsModal from "./components/DoctorsModal/DoctorsModal";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorQuery,
} from "@/redux/api/doctorsApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";
import Link from "next/link";

const DoctorsPAge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const query: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState<string>("");

  //when we type for search this hook call for fetch api for a time
  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 1000 });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteDoctor] = useDeleteDoctorMutation();

  const { data, isLoading } = useGetAllDoctorQuery({ ...query });
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();

      if (res?.id) {
        toast.success("Doctor deleted successfully");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "profilePhoto",
      headerName: "Profile Photo",
      renderCell: ({ row }) => {
        return (
          <Box style={{ borderRadius: "100%", alignItems: "center" }}>
            {row && (
              <Image
                src={
                  row?.profilePhoto
                    ? row?.profilePhoto
                    : "https://img.freepik.com/free-vector/hand-drawn-doctor-cartoon-illustration_23-2150680327.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais"
                }
                alt="profile image"
                width={60}
                height={60}
                style={{ borderRadius: "100%", alignItems: "center" }}
              />
            )}
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "designation", headerName: "Designation", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={2}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <DoctorsModal open={isModalOpen} setOpen={setIsModalOpen} />

        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctors"
        />
      </Stack>
      <Box my={2}>
        {!isLoading ? (
          <Box>
            <DataGrid rows={doctors} columns={columns} />
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPAge;
