import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "@/theme";

export const PrimaryButtonFilled = styled(Button)(() => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}));