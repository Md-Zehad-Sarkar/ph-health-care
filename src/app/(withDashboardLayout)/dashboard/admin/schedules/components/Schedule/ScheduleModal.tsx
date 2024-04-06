// "use client";
import PHModal from "@/components/shared/PHModal/PHModal";
import PHDatePecker from "@/forms/PHDatePecker";
import PHForm from "@/forms/PHForm";
import PHTimePicker from "@/forms/PHTimePicker";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utls/dateFormatter";
import { timeFormatter } from "@/utls/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TScheduleModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TScheduleModalProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleDatePicker = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);

    values.endDate = dateFormatter(values.endDate);

    values.startTime = timeFormatter(values.startTime);

    values.endTime = timeFormatter(values.endTime);

    try {
      const res = await createSchedule(values);

      if (res?.data?.length) {
        toast.success("Schedules created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <PHForm onSubmit={handleDatePicker}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <PHDatePecker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <PHDatePecker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" style={{ marginTop: "5px" }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
