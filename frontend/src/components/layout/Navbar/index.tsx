import { useState, useEffect } from "react";
import { alpha, Box, IconButton, Drawer, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { FlexBoxBetween } from "@/shared/styled";
import { NAVBAR_HEIGHT } from "@/theme";
import { NavButton } from "./NavButton";
import { LogoLink } from "./LogoLink";
import { LanguageSwitch } from "./LanguageSwitch";
import Logo from '@/assets/images/logos/unball-logo.png';
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

function Navbar() {
    const { t } = useTranslation();
    const getPath = useLocalizedPath();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { key: "home", path: getPath("home"), label: t("navbar.home"), end: true },
        { key: "about", path: getPath("about"), label: t("navbar.about") },
        { key: "papers", path: getPath("papers"), label: t("navbar.papers") },
        { key: "partners", path: getPath("partners"), label: t("navbar.partners") },
        { key: "contact", path: getPath("contact"), label: t("navbar.contact") },
    ];

    return (
        <Box
            component="nav"
            sx={(theme) => ({
                position: "sticky",
                top: 0,
                zIndex: theme.zIndex.appBar,
                width: "100%",
            })}
        >
            <FlexBoxBetween
                sx={(theme) => ({
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: scrolled
                        ? alpha(theme.palette.background.paper, 0.95)
                        : alpha(theme.palette.background.default, 0.9),
                    backdropFilter: "blur(12px)",
                    px: { xs: 2, sm: 4, md: 5 },
                    height: NAVBAR_HEIGHT,
                    borderBottom: "1px solid",
                    borderColor: scrolled ? "primary.main" : "border.main",
                    boxShadow: scrolled
                        ? `0 4px 20px ${alpha(theme.palette.common.black, 0.4)}`
                        : "none",
                    transition: "all 0.3s ease-in-out",
                })}
            >
                <LogoLink to={getPath("home")}>
                    <FlexBoxBetween sx={{ gap: 2 }}>
                        <img src={Logo} alt={t("navbar.logoAlt")} width={40} />
                        <Typography
                            variant="h2"
                            component="span"
                            sx={{ color: "primary.main", m: 0, fontSize: "1.5rem" }}
                        >
                            UnBall
                        </Typography>
                    </FlexBoxBetween>
                </LogoLink>
                <FlexBoxBetween sx={{ gap: { xs: 1, sm: 3 } }}>
                    <Stack
                        direction="row"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: { lg: 2, xl: 4 },
                            alignItems: "center",
                        }}
                    >
                        {navItems.map((item) => (
                            <Box key={item.key} sx={{ px: 2, py: 1 }}>
                                <NavButton to={item.path} end={item.end}>
                                    {item.label}
                                </NavButton>
                            </Box>
                        ))}
                    </Stack>

                    <LanguageSwitch />

                    <IconButton
                        color="inherit"
                        aria-label={t("navbar.openMenu")}
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
                    aria-label={t("navbar.closeMenu")}
                    sx={{ display: "flex", justifyContent: "flex-end"}}
                    onClick={() => setMobileOpen(false)}
                >
                    <CloseIcon />
                </IconButton>
                <Stack sx={{ gap: 1 }}>
                    {navItems.map((item) => (
                        <Box key={item.key} sx={{ py: 1.5, px: 2 }}>
                            <NavButton
                                to={item.path}
                                end={item.end}
                                onClick={() => setMobileOpen(false)}
                                style={{ display: "block", width: "100%", fontSize: "1rem" }}
                            >
                                {item.label}
                            </NavButton>
                        </Box>
                    ))}
                </Stack>
            </Drawer>
        </Box>
    );
}

export default Navbar;