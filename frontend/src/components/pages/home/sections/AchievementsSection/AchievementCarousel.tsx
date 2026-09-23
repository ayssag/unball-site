import { useState } from "react";
import { Box, Stack } from "@mui/material";
import AchievementBadge, { type AchievementItem } from "./AchievementBadge";
import CarouselArrow from "./CarouselArrow";

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

    const offsets = [-2, -1, 0, 1, 2];

    return (
        <Stack
            direction="row"
            sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                paddingY: { xs: 1, md: 2 },
                boxSizing: "border-box",
            }}
        >
            <CarouselArrow direction="left" onClick={handlePrev} />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    gap: { xs: 1, sm: 2, md: 3, lg: 5, xl: 8 },
                    px: { xs: 0.5, sm: 1, xl: 4 },
                }}
            >
                {offsets.map((offset) => {
                    const itemIndex = (activeIndex + offset + count) % count;
                    const item = items[itemIndex];
                    const isCenter = offset === 0;
                    const isFarSide = Math.abs(offset) === 2;

                    return (
                        <Box
                            key={`${item.id}-${offset}`}
                            sx={{ 
                                display: isFarSide ? { xs: "none", lg: "block" } : "block",
                                flexShrink: 0,
                            }}
                        >
                            <AchievementBadge
                                achievement={item}
                                isCenter={isCenter}
                                isFarSide={isFarSide}
                                onClick={() => setActiveIndex(itemIndex)}
                            />
                        </Box>
                    );
                })}
            </Box>

            <CarouselArrow direction="right" onClick={handleNext} />
        </Stack>
    );
}

export default AchievementCarousel;

