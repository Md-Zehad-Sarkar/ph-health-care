import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TPHInputProps = {
  name: string;
  label?: string;
  type: string;
  variant?: "outlined" | "standard" | "filled";
  size?: "small" | "medium";
  fullWidth: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  variant = "outlined",
  size = "small",
  fullWidth = false,
  required,
  sx,
}: TPHInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          required={required}
          placeholder={label}
          sx={sx}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;
