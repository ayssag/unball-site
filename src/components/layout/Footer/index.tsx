import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "@/assets/images/logos/unball-logo.png";
import { useNavItems } from "@/hooks/useNavItems";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { FlexBoxBetween } from "@/shared/styled";
import type { InstitutionalItem } from "@/types/content";

const SOCIAL_LINKS = [
  {
    key: "email",
    label: "E-mail",
    href: "mailto:equipeunball@gmail.com",
    icon: <Email fontSize="small" />,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/unball",
    icon: <GitHub fontSize="small" />,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/equipe.unball/",
    icon: <Instagram fontSize="small" />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/unball/",
    icon: <LinkedIn fontSize="small" />,
  },
];

function Footer() {
  const { t } = useTranslation();
  const navItems = useNavItems();
  const institutionalItems = useTranslatedList<InstitutionalItem>(
    "footer.institutional"
  );

  const contactLines = [
    {
      key: "location",
      label: `${t("footer.labels.location")}:`,
      value: t("footer.locationValue"),
      href: null,
    },
    {
      key: "email",
      label: `${t("footer.labels.email")}:`,
      value: "equipeunball@gmail.com",
      href: "mailto:equipeunball@gmail.com",
    },
    {
      key: "github",
      label: `${t("footer.labels.github")}:`,
      value: "github.com/unball",
      href: "https://github.com/unball",
    },
    {
      key: "instagram",
      label: `${t("footer.labels.instagram")}:`,
      value: "@equipe.unball",
      href: "https://www.instagram.com/equipe.unball/",
    },
    {
      key: "linkedin",
      label: `${t("footer.labels.linkedin")}:`,
      value: "/company/equipe-unball",
      href: "https://www.linkedin.com/company/unball/",
    },
  ];

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: "text.primary",
        px: { xs: 3, sm: 6, md: 10, lg: 14 },
        py: { xs: 6, md: 8 },
      })}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <img
                src={Logo}
                alt={t("navbar.logoAlt", "UnBall Logo")}
                width={32}
                height={32}
              />
              <Typography
                component="span"
                sx={(theme) => ({
                  fontFamily: theme.typography.fontFamilyDisplay,
                  fontSize: "1.25rem",
                })}
              >
                UNBALL
              </Typography>
            </Stack>
            <Stack spacing={1.25}>
              {contactLines.map((line) => (
                <Typography
                  key={line.key}
                  variant="body2"
                  sx={(theme) => ({
                    fontFamily: theme.typography.fontFamilyMono,
                    color: "text.secondary",
                  })}
                >
                  {line.label} {line.value}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Stack spacing={3}>
            <Typography
              variant="h6"
              sx={(theme) => ({
                fontFamily: theme.typography.fontFamilyMono,
                fontSize: "0.875rem",
                color: "text.primary",
                textTransform: "uppercase",
              })}
            >
              {t("footer.mappingTitle")}
            </Typography>
            <Stack spacing={1.25}>
              {navItems.map((item) => (
                <Typography
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Stack spacing={3}>
            <Typography
              variant="h6"
              sx={(theme) => ({
                fontFamily: theme.typography.fontFamilyMono,
                fontSize: "0.875rem",
                color: "text.primary",
                textTransform: "uppercase",
              })}
            >
              {t("footer.institutionalTitle")}
            </Typography>
            <Stack spacing={1.25}>
              {institutionalItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Divider
        sx={(theme) => ({
          my: 6,
          borderColor: alpha(theme.palette.border.subtle, 0.4),
        })}
      />
      <FlexBoxBetween>
        <Typography
          sx={(theme) => ({
            fontFamily: theme.typography.fontFamilyMono,
            fontSize: "0.75rem",
            color: alpha(theme.palette.text.secondary, 0.6),
          })}
        >
          {t("footer.bottomText")}
        </Typography>
        <Stack direction="row" spacing={1.25}>
          {SOCIAL_LINKS.map((social) => (
            <IconButton
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              sx={(theme) => ({
                color: "text.primary",
                transition:
                  "color 0.2s ease-in-out, transform 0.2s ease-in-out",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: "transparent",
                  transform: "translateY(-1px)",
                },
              })}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
      </FlexBoxBetween>
    </Box>
  );
}

export default Footer;
