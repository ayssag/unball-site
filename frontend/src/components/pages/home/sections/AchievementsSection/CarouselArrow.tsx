import { IconButton, alpha } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export type ArrowDirection = "left" | "right";

export type CarouselArrowProps = {
    direction: ArrowDirection;
    label: string;
    onClick?: () => void;
};

export function CarouselArrow({ direction, label, onClick }: CarouselArrowProps) {
    const Icon = direction === "left" ? ChevronLeft : ChevronRight;

    return (
        <IconButton
            aria-label={label}
            onClick={onClick}
            sx={(theme) => ({
                color: alpha(theme.palette.text.primary, 0.7),
                zIndex: 2,
                p: { xs: 0.5, sm: 1 },
                "&:hover": {
                    color: "primary.main",
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
            })}
        >
            <Icon sx={{ fontSize: { xs: 28, sm: 36, md: 40 } }} />
        </IconButton>
    );
}

export default CarouselArrow;
