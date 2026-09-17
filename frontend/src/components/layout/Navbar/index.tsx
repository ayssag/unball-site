import { useState } from "react";
import { alpha, MenuList, MenuItem, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { FlexBoxBetween } from "@/shared/styled";
import { NavButton } from "./NavButton";
import { LogoLink } from "./LogoLink";
import { LanguageSwitch } from "./LanguageSwitch";
import theme from "@/theme";
import Logo from "@/assets/unball-logo.png";
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";

type Props = {
    isTop: boolean;
};

const Navbar = ({ isTop }: Props) => {
    const { t, i18n } = useTranslation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const currentLang = (i18n.language?.startsWith("en") ? "en" : "pt") as SupportedLang;

    const navItems = [
        { key: "home", path: getRoutePath("home", currentLang), label: t("navbar.home"), end: true },
        { key: "about", path: getRoutePath("about", currentLang), label: t("navbar.about") },
        { key: "papers", path: getRoutePath("papers", currentLang), label: t("navbar.papers") },
        { key: "partners", path: getRoutePath("partners", currentLang), label: t("navbar.partners") },
        { key: "contact", path: getRoutePath("contact", currentLang), label: t("navbar.contact") },
    ];

    return (
        <nav style={{ width: "100%" }}>
            <FlexBoxBetween
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: isTop ? "background.default" : "secondary",
                    px: { xs: 2, sm: 4, md: 5 },
                    height: 80,
                    top: 0,
                    borderBottom: `.71px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                }}
            >
                <LogoLink to={getRoutePath("home", currentLang)}>
                    <FlexBoxBetween sx={{ gap: 2 }}>
                        <img src={Logo} alt="Logo da UnBall" width={40} />
                        <h2 style={{ color: `${theme.palette.primary.main}`, margin: 0 }}>UnBall</h2>
                    </FlexBoxBetween>
                </LogoLink>
                <FlexBoxBetween sx={{ gap: { xs: 1, sm: 3 } }}>
                    <MenuList
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: { lg: 2, xl: 4 },
                        }}
                    >
                        {navItems.map((item) => (
                            <MenuItem key={item.key}>
                                <NavButton to={item.path} end={item.end}>
                                    {item.label}
                                </NavButton>
                            </MenuItem>
                        ))}
                    </MenuList>

                    <LanguageSwitch />

                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        edge="end"
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </FlexBoxBetween>
            </FlexBoxBetween>

            {/* Menu Drawer para telas responsivas (<= md) */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                slotProps={{
                    paper: {
                        sx: {
                            width: 280,
                            backgroundColor: "background.default",
                            p: 3,
                        },
                    },
                }}
            >
                    <IconButton
                        color="primary"
                        sx={{ display: "flex", justifyContent: "flex-end"}}
                        onClick={() => setMobileOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                <MenuList sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {navItems.map((item) => (
                        <MenuItem key={item.key} onClick={() => setMobileOpen(false)} sx={{ py: 1.5 }}>
                            <NavButton to={item.path} end={item.end} style={{ width: "100%", fontSize: "1rem" }}>
                                {item.label}
                            </NavButton>
                        </MenuItem>
                    ))}
                </MenuList>
            </Drawer>
        </nav>
    );
};

export default Navbar;