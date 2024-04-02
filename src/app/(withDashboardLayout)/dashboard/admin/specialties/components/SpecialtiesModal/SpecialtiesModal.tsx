import PHModal from "@/components/shared/PHModal/PHModal";
import PHFileUploader from "@/forms/PHFileUploader";
import PHForm from "@/forms/PHForm";
import PHInput from "@/forms/PHInput";
import { Button, Grid, TextField } from "@mui/material";
import { Dispatch } from "react";
import { FieldValues } from "react-hook-form";
type TSpecialtiesModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TSpecialtiesModalProps) => {
  const handleCreateSpecialty = (values: FieldValues) => {
    console.log(values);
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
        <Button type="submit" sx={{ mt: 1 }}>Create</Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtiesModal;
