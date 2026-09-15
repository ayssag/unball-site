import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const NavButton = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "color 0.2s ease-in-out",

  "&, &:visited, &:focus": {
    color: theme.palette.text.primary,
  },

  "&:hover, &.active": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));