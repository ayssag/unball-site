import { Box, Typography, type SxProps, type Theme } from "@mui/material";

export type BadgePosition = "top" | "right" | "bottom" | "left";

export type TextBadgeProps = {
    value: number | string;
    unit?: string;
    position?: BadgePosition;
    sx?: SxProps<Theme>;
};

const positionStyles: Record<BadgePosition, SxProps<Theme>> = {
    top: {
        top: "-22px",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    right: {
        right: "-22px",
        top: "50%",
        transform: "translate(50%, -50%) rotate(90deg)",
    },
    bottom: {
        bottom: "-22px",
        left: "50%",
        transform: "translate(-50%, 50%)",
    },
    left: {
        left: "-22px",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-90deg)",
    },
};

export function TextBadge({
    value,
    unit = "px",
    position,
    sx,
}: TextBadgeProps) {
    const basePositionSx = position ? positionStyles[position] : {};

    return (
        <Box
            sx={{
                position: "absolute",
                backgroundColor: "background.default",
                color: "text.main",
                px: 1,
                py: 0.25,
                pointerEvents: "none",
                ...basePositionSx,
                ...(Array.isArray(sx) ? sx : [sx]),
            }}
        >
            <Typography
                sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                }}
            >
                {unit ? `${value} ${unit}` : value}
            </Typography>
        </Box>
    );
}

export default TextBadge;
