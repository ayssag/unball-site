import {
  Stack,
  TextField,
  type TextFieldProps,
  Typography,
} from "@mui/material";
import { alpha, styled, type Theme } from "@mui/material/styles";

const LabelText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyMono,
  fontWeight: "bold",
  fontSize: "0.625rem",
  color: alpha(theme.palette.text.primary, 0.7),
  textTransform: "uppercase",
}));

export function StyledTextField({
  label,
  variant = "standard",
  fullWidth = true,
  select,
  slotProps,
  ...props
}: TextFieldProps) {
  const defaultSelectSlotProps = select
    ? {
        select: {
          displayEmpty: true,
          MenuProps: {
            slotProps: {
              paper: {
                sx: {
                  backgroundColor: "background.paper",
                  border: (theme: Theme) =>
                    `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: "text.primary",
                  "& .MuiMenuItem-root": {
                    fontFamily: (theme: Theme) =>
                      theme.typography.fontFamilyMono,
                    fontSize: "0.875rem",
                    "&:hover": {
                      backgroundColor: (theme: Theme) =>
                        alpha(theme.palette.primary.main, 0.15),
                    },
                    "&.Mui-selected": {
                      backgroundColor: (theme: Theme) =>
                        alpha(theme.palette.primary.main, 0.25),
                    },
                  },
                },
              },
            },
          },
        },
      }
    : {};

  const mergedSlotProps = {
    ...defaultSelectSlotProps,
    ...slotProps,
  };

  const inputComponent = (
    <TextField
      variant={variant}
      fullWidth={fullWidth}
      select={select}
      slotProps={mergedSlotProps}
      {...props}
    />
  );

  if (label) {
    return (
      <Stack spacing={1}>
        <LabelText>{label}</LabelText>
        {inputComponent}
      </Stack>
    );
  }
  return inputComponent;
}

export default StyledTextField;
