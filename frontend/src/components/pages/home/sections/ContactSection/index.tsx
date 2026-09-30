import { Stack, Typography } from "@mui/material";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useTranslation } from "react-i18next";

function ContactSection() {
    const { t } = useTranslation();

    return(
        <BoxSection>
            <FlexBoxBetween>
                <Stack spacing={2} sx={{ width: "100%" }}>
                    <Typography variant="h6">{t("pages.home.contact.subtitle")}</Typography>
                    <Typography 
                        variant="h2" 
                        color="text.primary"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                    >
                        {t("pages.home.contact.title")}
                    </Typography>
                </Stack>
            </FlexBoxBetween>
        </BoxSection>

    )
}

export default ContactSection;