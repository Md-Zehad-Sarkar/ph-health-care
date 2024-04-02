"use client";
import PHModal from "@/components/shared/PHModal/PHModal";
import PHFileUploader from "@/forms/PHFileUploader";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyFormPayload } from "@/utls/modifyFormPayload";
import { Button, Grid } from "@mui/material";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TSpecialtiesModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TSpecialtiesModalProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleCreateSpecialty = async (values: FieldValues) => {
    const data = modifyFormPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();

      if (res?.id) {
        toast.success("Specialty Create Successfully");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Specialty">
      <PHForm onSubmit={handleCreateSpecialty}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" type="text" fullWidth={false} />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="File Upload" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtiesModal;
