import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography, ButtonBase } from '@mui/material';
import { alpha } from '@mui/material/styles';
import theme from '@/theme';
import { getEquivalentPath, type SupportedLang } from '@/i18n/routesMap';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = (i18n.language?.startsWith('en') ? 'en' : 'pt') as SupportedLang;

  const handleToggle = (targetLang: SupportedLang) => {
    if (targetLang === currentLang) return;
    const targetPath = getEquivalentPath(location.pathname, targetLang);
    i18n.changeLanguage(targetLang);
    navigate(targetPath);
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
        borderRadius: '20px',
        p: '3px',
        gap: '2px',
        userSelect: 'none',
      }}
    >
      {(['pt', 'en'] as SupportedLang[]).map((lang) => {
        const isActive = currentLang === lang;
        return (
          <ButtonBase
            key={lang}
            onClick={() => handleToggle(lang)}
            sx={{
              borderRadius: '16px',
              px: 1.5,
              py: 0.4,
              backgroundColor: isActive
                ? theme.palette.primary.main
                : 'transparent',
              color: isActive
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: isActive
                  ? theme.palette.primary.main
                  : alpha(theme.palette.secondary.main, 0.2),
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {lang.toUpperCase()}
            </Typography>
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default LanguageSwitch;
