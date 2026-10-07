import { useState, useEffect } from "react"
import { FlexBoxBetween } from "@/shared/styled"
import { Box, Typography, useMediaQuery, alpha } from "@mui/material"

function SystemStatus() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"))
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let animationFrameId: number

        if (isDesktop) {
            const handleMouseMove = (event: MouseEvent) => {
                animationFrameId = requestAnimationFrame(() => {
                    setCoords({ x: event.clientX, y: event.clientY })
                })
            }

            window.addEventListener("mousemove", handleMouseMove)

            return () => {
                window.removeEventListener("mousemove", handleMouseMove)
                cancelAnimationFrame(animationFrameId)
            }
        } else {
            const handleScroll = () => {
                animationFrameId = requestAnimationFrame(() => {
                    setCoords({
                        x: window.scrollX || window.pageXOffset || 0,
                        y: window.scrollY || window.pageYOffset || 0,
                    })
                })
            }

            handleScroll()
            window.addEventListener("scroll", handleScroll, { passive: true })

            return () => {
                window.removeEventListener("scroll", handleScroll)
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [isDesktop])

    return (
        <FlexBoxBetween
            sx={(theme) => ({
                position: "sticky",
                top: 80,
                zIndex: 1090,
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