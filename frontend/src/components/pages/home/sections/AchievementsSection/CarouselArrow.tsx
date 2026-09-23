import { IconButton, alpha } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import theme from "@/theme";

export type ArrowSide = "left" | "right";

export type CarouselArrowProps = {
    side?: ArrowSide;
    direction?: ArrowSide;
    onClick?: () => void;
};

export function CarouselArrow({ side, direction, onClick }: CarouselArrowProps) {
    const selectedSide = direction || side || "left";
    const isLeft = selectedSide === "left";

    return (
        <IconButton
            onClick={onClick}
            sx={{
                color: alpha(theme.palette.text.primary, 0.7),
                zIndex: 2,
                p: 1,
                "&:hover": {
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
            }}
        >
            {isLeft ? (
                <ChevronLeft sx={{ fontSize: 40 }} />
            ) : (
                <ChevronRight sx={{ fontSize: 40 }} />
            )}
        </IconButton>
    );
}

export default CarouselArrow;
