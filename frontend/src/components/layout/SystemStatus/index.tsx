import { FlexBoxBetween } from "@/shared/styled"
import { Box, Typography, useMediaQuery, alpha } from "@mui/material"
import { NAVBAR_HEIGHT } from "@/theme"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useScrollPosition } from "@/hooks/useScrollPosition"

function SystemStatus() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"))
    const mouse = useMousePosition(isDesktop)
    const scroll = useScrollPosition(!isDesktop)
    const coords = isDesktop ? mouse : scroll

    return (
        <FlexBoxBetween
            sx={(theme) => ({
                position: "sticky",
                top: NAVBAR_HEIGHT,
                zIndex: theme.zIndex.appBar - 10,
                width: "100%",
                backgroundColor: alpha(theme.palette.background.default, 0.85),
                backdropFilter: "blur(8px)",
                "& .MuiTypography-root": {
                    fontFamily: theme.typography.fontFamilyMono,
                    fontSize: '0.6875rem',
                    color: "text.primary",
                    padding: 2
                }
            })}
        >
            <Typography>
                X: {coords.x.toFixed(2)} / Y: {coords.y.toFixed(2)}
            </Typography>
            <Typography>SYS.STATUS: <Box component="span" sx={{ color: "success.main" }}>ONLINE</Box></Typography>
        </FlexBoxBetween>
    )
}

export default SystemStatus