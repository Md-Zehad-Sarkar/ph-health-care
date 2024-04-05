import { SxProps } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type TPHDatePeckerProps = {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PHDatePecker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: TPHDatePeckerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label="Create Schedule">
              <DesktopDatePicker
                {...field}
                label={label}
                disablePast
                timezone="system"
                sx={{ ...sx }}
                onChange={(date) => onChange(date)}
                value={value || Date.now()}
                slotProps={{
                  textField: {
                    required: required,
                    size: size,
                    sx: { ...sx },
                    variant: "outlined",
                    fullWidth: fullWidth,
                  },
                }}
              />
            </DemoItem>
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHDatePecker;
