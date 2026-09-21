import { Typography } from "@mui/material"
import { BoxSection, FlexBoxBetween } from "@/shared/styled"
import { t } from "i18next"

function AboutSection() {
    return (
        <BoxSection>
            <FlexBoxBetween>
                <Typography variant="h2" color="text.primary">{t("pages.home.about.title")}</Typography>
                <Typography>{t("pages.home.about.description")}</Typography>
            </FlexBoxBetween>
        </BoxSection>
    )
}

export default AboutSection