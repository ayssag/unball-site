import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FlexBoxBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BoxSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));