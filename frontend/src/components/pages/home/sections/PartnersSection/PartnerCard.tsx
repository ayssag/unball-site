import theme from "@/theme";
import { alpha, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type PartnerItem = {
    type: string;
    name: string;
    logoUrl: string;
    url?: string;
}

export type PartnerCardProps = {
    item?: PartnerItem;
}

export function PartnerCard({ item }: PartnerCardProps) {
    if (!item) return null;
    
    const { type, name, logoUrl, url } = item;
    
    return(
        <Box
            component={Link}
            to={url}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: alpha(theme.palette.background.default, 0.6),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                position: "relative",
                width: "266px",
                height: "204px",
                "& .MuiTypography-root": {
                    color: "text.primary"
                }
            }}
        >
            <Box
                sx={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0,
                    padding: 1 
                }}
            >
                <Typography variant="h6" sx={{ fontSize: "0.625rem" }}>{type}</Typography>
            </Box>
            <img src={logoUrl} style={{ maxHeight: "64px" }} alt={name} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%", 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0,
                    padding: 1 
                }}
            >
                <Typography variant="body1">{name}</Typography>
            </Box>
        </Box>
    )
}

export default PartnerCard;