import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

import { TagCard } from "@/components/common/TagCard";
import { FlexBoxBetween } from "@/shared/styled";
import type { LeagueItem } from "@/types/content";

export type LeagueCardProps = {
  item: LeagueItem;
};

export function LeagueCard({ item }: LeagueCardProps) {
  return (
    <Card>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "fit-content",
          padding: 1,
          backgroundColor: "background.default",
          border: 1,
          borderColor: "border.main",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "0.55rem", sm: "0.625rem" } }}
        >
          CAT:{item.shortName}
        </Typography>
      </Box>
      <CardHeader
        sx={{ padding: 0, mb: 2 }}
        title={
          <Typography
            variant="h3"
            sx={{
              mt: { xs: 3, sm: 2 },
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            }}
          >
            {item.name}
          </Typography>
        }
        subheader={
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {item.tags &&
              item.tags.map((tag) => <TagCard tag={tag} key={tag} />)}
          </Box>
        }
      />
      <CardContent sx={{ padding: 0, mb: 2 }}>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          {item.description}
        </Typography>
      </CardContent>
      {item.trivia && (
        <Box
          sx={{
            borderTop: 1,
            borderColor: "border.main",
            pt: 2,
          }}
        >
          <FlexBoxBetween sx={{ gap: 2 }}>
            <Stack spacing={1}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "0.55rem", sm: "0.625rem" },
                }}
              >
                {item.trivia.title}
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  textTransform: "none",
                }}
              >
                {item.trivia.description}
              </Typography>
            </Stack>
            <Box
              sx={{
                border: 1,
                borderColor: "border.main",
                backgroundColor: "background.default",
                width: { xs: "3rem", sm: "4rem" },
                height: { xs: "3rem", sm: "4rem" },
              }}
            />
          </FlexBoxBetween>
        </Box>
      )}
    </Card>
  );
}
