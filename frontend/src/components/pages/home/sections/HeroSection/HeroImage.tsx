import { useState, useRef, useEffect } from "react";
import { Box, useTheme, type SxProps, type Theme } from "@mui/material";
import type { ResponsiveStyleValue } from "@mui/system";
import defaultHeroImg from "@/assets/images/unbolinha/bolinha_sentado.png";
import TextBadge from "./TextBadge";

type HeroImageProps = {
    src?: string;
    alt?: string;
    label?: string;
    width?: ResponsiveStyleValue<string | number>;
    sx?: SxProps<Theme>;
}

export function HeroImage({
    src = defaultHeroImg,
    alt = "UnBolinha, Mascote da UnBall",
    width = { xs: "100%", sm: "380px", xl: "650px" },
}: HeroImageProps) {
    const theme = useTheme();
    const imgRef = useRef<HTMLImageElement>(null);
    const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
        width: 380,
        height: 383,
    });

    const updateDimensions = () => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                setDimensions({
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                });
            }
        }
    };

    useEffect(() => {
        updateDimensions();

        const imgEl = imgRef.current;
        if (!imgEl) return;

        const observer = new ResizeObserver(() => {
            updateDimensions();
        });

        observer.observe(imgEl);
        window.addEventListener("resize", updateDimensions);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const primaryColor = theme.palette.text.primary;
    const { width: imgW, height: imgH } = dimensions;

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width,
                    maxWidth: "100%",
                    display: "inline-block",
                }}
            >
                <Box
                    component="img"
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    onLoad={updateDimensions}
                    sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 1,
                    }}
                />

                {/* SVG para linhas de extensão, cota e setas */}
                <svg
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        pointerEvents: "none",
                    }}
                >
                    {/* --- COTA DE LARGURA (HORIZONTAL - TOPO) --- */}
                    {/* Linha principal de cota da largura */}
                    <line x1="0" y1="-22" x2={imgW} y2="-22" stroke={primaryColor} strokeWidth="0.5" />
                    {/* Seta esquerda */}
                    <polygon points={`0,-22 8,-26 6,-22 8,-18`} fill={primaryColor} />
                    {/* Seta direita */}
                    <polygon points={`${imgW},-22 ${imgW - 8},-26 ${imgW - 6},-22 ${imgW - 8},-18`} fill={primaryColor} />

                    {/* --- COTA DE ALTURA (VERTICAL - DIREITA) --- */}
                    {/* Linha principal de cota da altura */}
                    <line x1={imgW + 22} y1="0" x2={imgW + 22} y2={imgH} stroke={primaryColor} strokeWidth="0.5" />
                    {/* Seta superior */}
                    <polygon points={`${imgW + 22},0 ${imgW + 18},8 ${imgW + 22},6 ${imgW + 26},8`} fill={primaryColor} />
                    {/* Seta inferior */}
                    <polygon points={`${imgW + 22},${imgH} ${imgW + 18},${imgH - 8} ${imgW + 22},${imgH - 6} ${imgW + 26},${imgH - 8}`} fill={primaryColor} />
                </svg>

                {/* Badge do Texto da Cota de Largura */}
                <TextBadge value={imgW} position="top" />

                {/* Badge do Texto da Cota de Altura */}
                <TextBadge value={imgH} position="right" />
            </Box>
        </Box>
    );
}

export default HeroImage;


