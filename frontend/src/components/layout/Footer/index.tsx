import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { alpha, Box, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "@/assets/images/logos/unball-logo.png";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { FlexBoxBetween } from "@/shared/styled";
import type { InstitutionalItem } from "@/types/content";

function Footer() {
    const { t } = useTranslation();
    const getPath = useLocalizedPath();
    const institutionalItems = useTranslatedList<InstitutionalItem>("footer.institutional");
    
    const navItems = [
        { key: "home", path: getPath("home"), label: t("navbar.home"), end: true },
        { key: "about", path: getPath("about"), label: t("navbar.about") },
        { key: "papers", path: getPath("papers"), label: t("navbar.papers") },
        { key: "partners", path: getPath("partners"), label: t("navbar.partners") },
        { key: "contact", path: getPath("contact"), label: t("navbar.contact") },
    ];
    
    const contactLines = [
        {
            label: `${t("footer.labels.location")}:`,
            value: t("footer.locationValue"),
            href: null,
        },
        {
            label: `${t("footer.labels.email")}:`,
            value: "equipeunball@gmail.com",
            href: "mailto:equipeunball@gmail.com",
            icon: <Email />
        },
        {
            label: `${t("footer.labels.github")}:`,
            value: "github.com/unball",
            href: "https://github.com/unball",
            icon: <GitHub />
        },
        {
            label: `${t("footer.labels.instagram")}:`,
            value: "@equipe.unball",
            href: "https://www.instagram.com/equipe.unball/",
            icon: <Instagram />
        },
        {
            label: `${t("footer.labels.linkedin")}:`,
            value: "/company/equipe-unball",
            href: "https://www.linkedin.com/company/unball/",
            icon: <LinkedIn />
        },
    ];

    return (
        <Box
            component="footer"
            sx={(theme) =>({
                width: "100%",
                backgroundColor: theme.palette.background.default,
                color: "text.primary",
                px: { xs: 3, sm: 6, md: 10, lg: 14},
                py: { xs: 6, md: 8 }
            })}
        >
            <Grid container sx={{ justifyContent: "space-between"}}>
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
                                    fontSize: "1.25rem"
                                })}
                            >
                                UNBALL
                            </Typography>
                        </Stack>
                        <Stack spacing={1.25}>
                            {
                                contactLines.map((line, index) =>(
                                    <Typography
                                        key={index}
                                        variant="body2"
                                        sx={(theme) => ({
                                            fontFamily: theme.typography.fontFamilyMono,
                                            //fontSize: "0.8125rem",
                                            color: "text.secondary"
                                        })}
                                    >
                                        {line.label} {line.value}
                                    </Typography>
                                ) )
                            }
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <Stack spacing={3}>
                        <Typography>
                            {t("footer.mappingTitle")}
                        </Typography>
                        <Stack spacing={1.25}>
                            {
                                navItems.map((item, index) => (
                                    <Typography
                                        key={index}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            color: "text.secondary",
                                            textDecoration: "none",
                                            transition: "color 0.2s ease-in-out",
                                            "&:hover": {
                                                color: "text.primary"
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))
                            }
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <Stack spacing={3}>
                        <Typography>
                            {t("footer.institutionalTitle")}
                        </Typography>
                        <Stack spacing={1.25}>
                            {
                                institutionalItems.map((item, index) => (
                                    <Typography
                                        key={index}
                                        component="a"
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "text.secondary",
                                            textDecoration: "none",
                                            transition: "color 0.2s ease-in-out",
                                            "&:hover": {
                                                color: "text.primary"
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))
                            }
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Divider
                sx={(theme) => ({
                    my: 6,
                    borderColor: alpha(theme.palette.border.subtle, 0.4)
                })}
            />
            <FlexBoxBetween>
                <Typography
                    sx={(theme) => ({
                        fontFamily: theme.typography.fontFamilyMono,
                        fontSize: "0.75rem",
                        color: alpha(theme.palette.text.secondary, 0.6)
                    })}
                >
                    {t("footer.bottomText")}
                </Typography>
                <Stack direction="row" spacing={1.25}>
                    {
                        contactLines.map((line, index) => (
                            <IconButton 
                                key={index} 
                                href={line.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={(theme) => ({
                                    color: "text.primary",
                                    transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        backgroundColor: "transparent",
                                        transform: "translateY(-1px)",
                                    },
                                })}
                            >
                                {line.icon}
                            </IconButton>
                        ))
                    }
                </Stack>
            </FlexBoxBetween>
        </Box>
    );
}

export default Footer;