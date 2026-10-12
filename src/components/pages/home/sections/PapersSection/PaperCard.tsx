import { ArrowForward } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { TagCard } from "@/components/common/TagCard";
import type { PaperItem } from "@/types/content";

import { YearBadge } from "./YearBadge";

export type PaperCardProps = {
  item: PaperItem;
};

export function PaperCard({ item }: PaperCardProps) {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          alignItems: { xs: "flex-start", sm: "stretch" },
        }}
      >
        <Box sx={{ alignSelf: { xs: "flex-start", sm: "auto" } }}>
          <YearBadge date={new Date(item.date)} />
        </Box>
        <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
          <CardHeader
            sx={{ padding: 0 }}
            title={
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {item.tags &&
                    item.tags.map((tag) => <TagCard tag={tag} key={tag} />)}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            }
            subheader={
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                }}
              >
                {t("pages.home.papers.authorsLabel", "AUTORES:")}{" "}
                {Array.isArray(item.authors) && item.authors.join(", ")}
              </Typography>
            }
          />
          <CardContent sx={{ padding: 0, mt: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {item.abstract}
            </Typography>
          </CardContent>
          <Button
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={(theme) => ({
              color: "text.primary",
              gap: 2,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              width: "fit-content",
              maxWidth: "100%",
              borderBottom: 1,
              borderColor: "border.main",
              mt: 1,
              px: 1,
              py: 0.5,
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                borderBottomColor: "secondary.main",
              },
            })}
          >
            {item.ctaText}
            <ArrowForward sx={{ fontSize: "inherit" }} />
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
