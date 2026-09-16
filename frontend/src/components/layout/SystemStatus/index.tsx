import { useState, useEffect } from "react"
import { FlexBoxBetween } from "@/shared/styled"
import { Typography, useMediaQuery } from "@mui/material"
import theme from "@/theme"

function SystemStatus() {
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
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
            sx={{
                position: "sticky",
                top:0,
                "& .MuiTypography-root": {
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6875rem',
                    color: theme.palette.text.primary,
                    padding: 2
                }
            }}
        >
            <Typography>
                X: {coords.x.toFixed(2)} / Y: {coords.y.toFixed(2)}
            </Typography>
            <Typography>SYS.STATUS: <span style={{ color: theme.palette.success.main }}>ONLINE</span></Typography>
        </FlexBoxBetween>
    )
}

export default SystemStatus 