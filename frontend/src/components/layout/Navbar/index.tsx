import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  alpha,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@/assets/images/logos/unball-logo.png";
import { useNavItems } from "@/hooks/useNavItems";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { FlexBoxBetween } from "@/shared/styled";
import { NAVBAR_HEIGHT } from "@/theme";

import { LanguageSwitch } from "./LanguageSwitch";
import { LogoLink } from "./LogoLink";
import { NavButton } from "./NavButton";

function Navbar() {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();
  const navItems = useNavItems();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          sx={{ display: "flex", justifyContent: "flex-end" }}
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
