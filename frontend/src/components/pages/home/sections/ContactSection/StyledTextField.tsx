import { styled, alpha, type Theme } from "@mui/material/styles";
import { TextField, type TextFieldProps, Stack, Typography } from "@mui/material";

const StyledMuiTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        fontFamily: "'Space Mono', monospace",
        color: theme.palette.text.primary,
        fontSize: "0.875rem",
        paddingBottom: theme.spacing(1),
        "&::placeholder": {
            color: "#9CA3AF",
            opacity: 1,
        },
    },
    "& .MuiInput-underline:before": {
        borderBottom: `1px solid ${theme.palette.border.main}`,
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    "& .MuiInput-underline:after": {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    "& .MuiSelect-icon": {
        color: alpha(theme.palette.text.primary, 0.6),
    },
    "& .MuiFormHelperText-root": {
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.75rem",
        marginTop: theme.spacing(0.5),
    },
}));

const LabelText = styled(Typography)(() => ({
    fontFamily: "'Space Mono', monospace",
    fontWeight: "bold",
    fontSize: "0.625rem",
    color: "#A0B4C8",
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
    const defaultSelectSlotProps = select ? {
        select: {
            displayEmpty: true,
            MenuProps: {
                slotProps: {
                    paper: {
                        sx: {
                            backgroundColor: "background.paper",
                            border: (theme: Theme) => `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                            color: "text.primary",
                            "& .MuiMenuItem-root": {
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.875rem",
                                "&:hover": {
                                    backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.15),
                                },
                                "&.Mui-selected": {
                                    backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.25),
                                },
                            },
                        },
                    },
                },
            },
        },
    } : {};

    const mergedSlotProps = {
        ...defaultSelectSlotProps,
        ...slotProps,
    };

    const inputComponent = (
        <StyledMuiTextField
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
