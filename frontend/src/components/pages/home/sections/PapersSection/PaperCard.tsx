import {
    Stack,
    Box, 
    Card, 
    CardContent, 
    CardHeader,
    Typography,
    Button,
    alpha, 
    CardActionArea
} from "@mui/material";
import { YearBadge } from "./YearBadge";
import theme from "@/theme";
import { ArrowForward } from "@mui/icons-material";
import { TagCard } from "@/components/common/TagCard";

export type PaperItem = {
    title: string;
    authors: string[];
    date: Date;
    abstract: string;
    url: string;
    tags: string[];
    ctaText: string;
};

export type PaperCardProps = {
    item?: PaperItem;
};

export function PaperCard({ item }: PaperCardProps) {
    if (!item) return null;

    return (
        <Card
            sx={{
                width: "100%",
                padding: { xs: 2, sm: 3 },
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                borderRadius: 0,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 } }}>
                <Box>
                    <YearBadge date={new Date(item.date)} />
                </Box>
                <Stack spacing={1}>
                    <CardHeader
                        sx={{ padding: 0 }}
                        title={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ mb: 2, gap: 1 }}>
                                    {item.tags && item.tags.map((tag, index) => (
                                        <TagCard tag={tag} key={index} />
                                    ))}
                                </Stack>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        mb: 2,
                                        fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        }
                        subheader={
                            <Typography
                                variant="h6"
                            >
                                AUTORES: {Array.isArray(item.authors) && item.authors.join(", ")}
                            </Typography>
                        }
                    
                    />
                    <CardContent sx={{ padding: 0, mt: 2 }}>
                        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                            {item.abstract}
                        </Typography>
                    </CardContent>
                    <CardActionArea 
                        sx={{ 
                            width: "fit-content", 
                            borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}` 
                        }}
                    >
                        <Button 
                            sx={{
                                color: "text.primary",
                                gap: 2
                            }}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.ctaText}
                            <ArrowForward sx={{ fontSize: "inherit" }}/>
                        </Button>
                    </CardActionArea>
                </Stack>
            </Box>

        </Card>
    )
}