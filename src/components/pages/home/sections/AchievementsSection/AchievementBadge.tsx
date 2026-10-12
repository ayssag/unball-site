import {
  EmojiEventsOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { alpha, Box, ButtonBase, Stack, Typography } from "@mui/material";
import type { ResponsiveStyleValue } from "@mui/system";
import type { ReactNode } from "react";

import type { AchievementItem } from "@/types/content";

export type { AchievementItem };

export type BadgeVariant = "center" | "side" | "far";

export type AchievementBadgeProps = {
  achievement: AchievementItem;
  variant?: BadgeVariant;
  onClick?: () => void;
};

const ICONS: Record<string, ReactNode> = {
  trophy: <EmojiEventsOutlined />,
  medal: <WorkspacePremiumOutlined />,
};

type SizeConfig = {
  circle: ResponsiveStyleValue<number>;
  icon: ResponsiveStyleValue<number>;
  spacing: ResponsiveStyleValue<number>;
  opacity: number;
};

const SIZES: Record<BadgeVariant, SizeConfig> = {
  center: {
    circle: { xs: 100, sm: 130, md: 150, lg: 175, xl: 208 },
    icon: { xs: 40, sm: 52, md: 64, lg: 72, xl: 88 },
    spacing: { xs: 1.5, md: 2.5 },
    opacity: 1,
  },
  side: {
    circle: { xs: 56, sm: 76, md: 90, lg: 100, xl: 128 },
    icon: { xs: 24, sm: 32, md: 38, lg: 40, xl: 52 },
    spacing: { xs: 1, md: 1.5 },
    opacity: 0.65,
  },
  far: {
    circle: { xs: 50, sm: 64, md: 72, lg: 76, xl: 96 },
    icon: { xs: 20, sm: 26, md: 30, lg: 32, xl: 40 },
    spacing: { xs: 1, md: 1.5 },
    opacity: 0.4,
  },
};

export function AchievementBadge({
  achievement,
  variant = "side",
  onClick,
}: AchievementBadgeProps) {
  const { title, competition, year } = achievement;
  const isCenter = variant === "center";
  const size = SIZES[variant];
  const icon = (achievement.icon && ICONS[achievement.icon]) || (
    <EmojiEventsOutlined />
  );

  return (
    <ButtonBase
      onClick={onClick}
      focusRipple
      sx={(theme) => ({
        display: "block",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
        opacity: size.opacity,
        "&:hover": {
          opacity: 1,
          transform: isCenter ? "scale(1.04)" : "scale(0.96)",
        },
        "&:hover .achievement-circle": {
          boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.3)}`,
        },
      })}
    >
      <Stack spacing={size.spacing} sx={{ alignItems: "center" }}>
        <Box
          className="achievement-circle"
          sx={{
            width: size.circle,
            height: size.circle,
            borderRadius: "50%",
            border: 1,
            borderColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiSvgIcon-root": {
                fontSize: size.icon,
              },
            }}
          >
            {icon}
          </Box>
        </Box>

        <Stack
          sx={{
            display: isCenter
              ? "flex"
              : { xs: "none", md: variant === "far" ? "none" : "flex" },
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontSize: isCenter
                ? { xs: "1rem", sm: "1.2rem", md: "1.4rem", xl: "1.65rem" }
                : { xs: "0.85rem", md: "1rem", xl: "1.15rem" },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: isCenter
                ? { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" }
                : { xs: "0.6rem", md: "0.7rem", xl: "0.8rem" },
              color: "text.primary",
            }}
          >
            {competition}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: isCenter
                ? { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" }
                : { xs: "0.6rem", md: "0.7rem", xl: "0.8rem" },
              color: "secondary.main",
            }}
          >
            {year}
          </Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
}

export default AchievementBadge;
