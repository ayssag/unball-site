import { Typography } from "@mui/material";

import { Panel } from "@/shared/styled";
import type { WorkAreaItem } from "@/types/content";

export type WorkAreaDescriptionProps = {
  workArea?: Pick<WorkAreaItem, "title" | "description">;
};

function WorkAreaDescription({ workArea }: WorkAreaDescriptionProps) {
  if (!workArea) return null;

  return (
    <Panel
      bordered="all"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        paddingX: { xs: 2, sm: 3 },
        paddingY: { xs: 2, sm: 2.5 },
      }}
    >
      <Typography
        variant="h6"
        color="primary"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem" },
          marginBottom: 1,
        }}
      >
        {">"} {workArea.title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
        }}
      >
        {workArea.description}
      </Typography>
    </Panel>
  );
}

export default WorkAreaDescription;
