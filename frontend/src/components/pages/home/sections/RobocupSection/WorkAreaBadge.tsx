import { ButtonBase, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { Panel } from "@/shared/styled";

export type WorkAreaBadgeProps = {
  title: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

function WorkAreaBadge({
  title,
  icon,
  isActive = false,
  onClick,
}: WorkAreaBadgeProps) {
  return (
    <ButtonBase
      onClick={onClick}
      aria-pressed={isActive}
      focusRipple
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        "&:hover > .work-area-panel": { borderColor: "primary.main" },
      }}
    >
      <Panel
        className="work-area-panel"
        bordered="all"
        sx={{
          width: "100%",
          height: "100%",
          minHeight: { xs: 90, sm: 100, md: 110 },
          paddingX: { xs: 1, sm: 2 },
          paddingY: { xs: 1.5, sm: 2 },
          borderColor: isActive ? "primary.main" : "border.main",
          transition: "all 0.2s ease-in-out",
          boxSizing: "border-box",
          display: "flex",
          "& .MuiSvgIcon-root": {
            color: "primary.main",
            fontSize: { xs: 22, sm: 24, md: 28 },
          },
        }}
      >
        <Stack
          spacing={1}
          sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
        >
          {icon}
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            sx={{ fontSize: { xs: "0.6rem", sm: "0.625rem" } }}
          >
            {title}
          </Typography>
        </Stack>
      </Panel>
    </ButtonBase>
  );
}

export default WorkAreaBadge;
