"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal/SpecialtiesModal";
import { useState } from "react";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { data: specialties, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteSpecialty(id).unwrap();

    if (res?.id) {
      toast.success("Specialty Deleted Successfully");
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box my={2}>
            <Image
              src={row?.icon}
              alt="icon"
              width={20}
              height={20}
              style={{ alignItems: "center" }}
            />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsOpenModal(true)}>Create Specialty</Button>

        <SpecialtiesModal open={isOpenModal} setOpen={setIsOpenModal} />

        <TextField size="small" placeholder="Search Specialty" />
      </Stack>
      <Box my={2}>
        {!isLoading ? (
          <Box>
            <DataGrid rows={specialties} columns={columns} />
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
