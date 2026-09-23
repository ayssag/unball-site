import { useState } from "react";
import { Box, Stack, IconButton, alpha } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import theme from "@/theme";
import AchievementBadge, { type AchievementItem } from "./AchievementBadge";

export type AchievementCarouselProps = {
    items: AchievementItem[];
};

export function AchievementCarousel({ items }: AchievementCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(() => {
        if (!items || items.length === 0) return 0;
        return Math.floor(items.length / 2);
    });

    if (!items || items.length === 0) return null;

    const count = items.length;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + count) % count);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % count);
    };

    // 5 slots visíveis em torno do ativo: -2, -1, 0, 1, 2
    const offsets = [-2, -1, 0, 1, 2];

    return (
        <Stack
            direction="row"
            sx={{
                width: "100%",
                alignItems: "center",
                paddingY: 2,
            }}
        >
            <IconButton
                onClick={handlePrev}
                sx={{
                    color: alpha(theme.palette.text.primary, 0.7),
                    zIndex: 2,
                    p: 1,
                    "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                }}
            >
                <ChevronLeft sx={{ fontSize: 40 }} />
            </IconButton>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    gap: { xs: 1, sm: 2, md: 4 },
                    overflow: "hidden",
                    paddingX: 1,
                }}
            >
                {offsets.map((offset) => {
                    const itemIndex = (activeIndex + offset + count) % count;
                    const item = items[itemIndex];
                    const isCenter = offset === 0;

                    return (
                        <Box
                            key={`${item.id}-${offset}`}
                            sx={{
                                display: "block",
                                transition: "all 0.4s ease-in-out",
                            }}
                        >
                            <AchievementBadge
                                achievement={item}
                                isCenter={isCenter}
                                onClick={() => setActiveIndex(itemIndex)}
                            />
                        </Box>
                    );
                })}
            </Box>

            <IconButton
                onClick={handleNext}
                sx={{
                    color: alpha(theme.palette.text.primary, 0.7),
                    zIndex: 2,
                    p: 1,
                    "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                }}
            >
                <ChevronRight sx={{ fontSize: 40 }} />
            </IconButton>
        </Stack>
    );
}

export default AchievementCarousel;
