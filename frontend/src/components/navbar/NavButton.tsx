import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import theme from "@/theme";

export const NavButton = styled(NavLink)`
    text-decoration: none;
    color: ${theme.palette.text.primary};
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &, &:visited, &:focus {
        color: ${theme.palette.text.primary};
    }

    &:hover, &.active {
        color: ${theme.palette.primary.main};
        background-color: transparent;
    }
`;