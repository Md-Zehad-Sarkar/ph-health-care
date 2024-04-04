import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type TPHSelectProps = {
  name: string;
  type: string;
  label?: string;
  variant?: "outlined" | "standard" | "filled";
  size?: "small" | "medium";
  fullWidth: boolean;
  required?: boolean;
  placeholder?: string;
  sx?: SxProps;
  items: string[];
};

const PHSelect = ({
  name,
  type = "select",
  label,
  variant = "outlined",
  size = "small",
  fullWidth = false,
  required,
  placeholder,
  sx,
  items,
}: TPHSelectProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          select
          type={type}
          label={label}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          required={required}
          placeholder={placeholder}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
          sx={{ ...sx }}
        >
          {items?.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelect;
