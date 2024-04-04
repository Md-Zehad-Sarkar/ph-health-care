import PHModal from "@/components/shared/PHModal/PHModal";
import PHDatePecker from "@/forms/PHDatePecker";
import PHForm from "@/forms/PHForm";
import { Button, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TScheduleModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TScheduleModalProps) => {
  const handleDatePicker = async (values: FieldValues) => {
    console.log("date", values);
    try {
    } catch (error: any) {
      console.error(error?.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen}>
      <PHForm onSubmit={handleDatePicker}>
        <PHDatePecker name="startDate" />
        <Button type="submit">Create</Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
