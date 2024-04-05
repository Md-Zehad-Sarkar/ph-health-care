import { SxProps } from "@mui/material";
import {
  DesktopTimePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type TPHTimePeckerProps = {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PHTimePicker = ({
  name,
  size = "small",
  placeholder,
  label,
  required,
  fullWidth = true,
  sx,
}: TPHTimePeckerProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              timezone="system"
              onChange={(time) => onChange(time)}
              value={value || Date.now()}
              sx={{ ...sx }}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: { ...sx },
                  variant: "outlined",
                  fullWidth: fullWidth,
                  error: isError,
                  helperText: isError
                    ? (formState?.errors[name]?.message as string)
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;
