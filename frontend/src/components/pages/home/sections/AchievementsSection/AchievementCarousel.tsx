import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import AchievementBadge, { type BadgeVariant } from "./AchievementBadge";
import CarouselArrow from "./CarouselArrow";
import type { AchievementItem } from "@/types/content";

export type AchievementCarouselProps = {
    items: AchievementItem[];
};

const MAX_OFFSET = 2;

function getVariant(offset: number): BadgeVariant {
    const distance = Math.abs(offset);
    if (distance === 0) return "center";
    return distance === MAX_OFFSET ? "far" : "side";
}

export function AchievementCarousel({ items }: AchievementCarouselProps) {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(() => Math.floor(items.length / 2));

    if (items.length === 0) return null;

    const count = items.length;

    // Com poucos itens, limita os offsets para não repetir o mesmo item na tela.
    const maxOffset = Math.min(MAX_OFFSET, Math.floor((count - 1) / 2));
    const offsets = Array.from({ length: maxOffset * 2 + 1 }, (_, i) => i - maxOffset);

    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + count) % count);
    const handleNext = () => setActiveIndex((prev) => (prev + 1) % count);

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
            <CarouselArrow
                direction="left"
                label={t("pages.home.achievements.previous")}
                onClick={handlePrev}
            />

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
                    const variant = getVariant(offset);

                    return (
                        <Box
                            key={`${item.id}-${offset}`}
                            sx={{
                                display: variant === "far" ? { xs: "none", lg: "block" } : "block",
                                flexShrink: 0,
                            }}
                        >
                            <AchievementBadge
                                achievement={item}
                                variant={variant}
                                onClick={() => setActiveIndex(itemIndex)}
                            />
                        </Box>
                    );
                })}
            </Box>

            <CarouselArrow
                direction="right"
                label={t("pages.home.achievements.next")}
                onClick={handleNext}
            />
        </Stack>
    );
}

export default AchievementCarousel;
