import { useState, useEffect } from "react";
import { alpha, MenuList, MenuItem, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { FlexBoxBetween } from "@/shared/styled";
import { NavButton } from "./NavButton";
import { LogoLink } from "./LogoLink";
import { LanguageSwitch } from "./LanguageSwitch";
import theme from "@/theme";
import Logo from '@/assets/images/logos/unball-logo.png';
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";

type Props = {
    isTop?: boolean;
};

const Navbar = ({ isTop }: Props) => {
    const { t, i18n } = useTranslation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentLang = (i18n.language?.startsWith("en") ? "en" : "pt") as SupportedLang;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isScrolled = isTop !== undefined ? !isTop || scrolled : scrolled;

    const navItems = [
        { key: "home", path: getRoutePath("home", currentLang), label: t("navbar.home"), end: true },
        { key: "about", path: getRoutePath("about", currentLang), label: t("navbar.about") },
        { key: "papers", path: getRoutePath("papers", currentLang), label: t("navbar.papers") },
        { key: "partners", path: getRoutePath("partners", currentLang), label: t("navbar.partners") },
        { key: "contact", path: getRoutePath("contact", currentLang), label: t("navbar.contact") },
    ];

    return (
        <nav style={{ position: "sticky", top: 0, zIndex: 1100, width: "100%" }}>
            <FlexBoxBetween
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: isScrolled
                        ? alpha(theme.palette.background.paper, 0.95)
                        : alpha(theme.palette.background.default, 0.9),
                    backdropFilter: "blur(12px)",
                    px: { xs: 2, sm: 4, md: 5 },
                    height: 80,
                    borderBottom: isScrolled
                        ? `1px solid ${theme.palette.primary.main}`
                        : `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    boxShadow: isScrolled
                        ? `0 4px 20px ${alpha(theme.palette.common.black, 0.4)}`
                        : "none",
                    transition: "all 0.3s ease-in-out",
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