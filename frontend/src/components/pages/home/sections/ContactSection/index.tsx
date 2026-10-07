import { Stack } from "@mui/material";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { SectionHeader } from "@/components/common/SectionHeader";

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
                <SectionHeader
                    subtitle={t("pages.home.contact.subtitle")}
                    title={t("pages.home.contact.title")}
                    description={t("pages.home.contact.description")}
                    sx={{ width: "100%", maxWidth: { md: "45%" } }}
                />
                <Stack sx={{ width: "100%", maxWidth: { md: "55%" } }}>
                    <ContactForm />
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default ContactSection;