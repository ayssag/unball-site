import { Stack, Typography } from "@mui/material";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

function ContactSection() {
    const { t } = useTranslation();

    return (
        <BoxSection sx={{ width: "100%" }}>
            <FlexBoxBetween
                sx={{
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 6 },
                    alignItems: { xs: "stretch", md: "flex-start" },
                }}
            >
                <Stack spacing={2} sx={{ width: "100%", maxWidth: { md: "45%" } }}>
                    <Typography variant="h6">{t("pages.home.contact.subtitle")}</Typography>
                    <Typography 
                        variant="h2" 
                        color="text.primary"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                    >
                        {t("pages.home.contact.title")}
                    </Typography>
                    <Typography color="text.secondary">
                        {t("pages.home.contact.description")}
                    </Typography>
                </Stack>
                <Stack sx={{ width: "100%", maxWidth: { md: "55%" } }}>
                    <ContactForm />
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default ContactSection;