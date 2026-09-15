import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Switch } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { getEquivalentPath, type SupportedLang } from '@/i18n/routesMap';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 74,
  height: 32,
  padding: 0,
  display: 'flex',
  userSelect: 'none',
  '& .MuiSwitch-switchBase': {
    padding: 3,
    transitionDuration: '250ms',
    '&.Mui-checked': {
      transform: 'translateX(38px)',
      color: theme.palette.text.primary,
      '& .MuiSwitch-thumb:before': {
        content: "'EN'",
      },
      '& + .MuiSwitch-track': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        opacity: 1,
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 30,
    height: 26,
    borderRadius: 14,
    boxShadow: 'none',
    position: 'relative',
    '&:before': {
      content: "'PT'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: '0.75rem',
      color: theme.palette.primary.contrastText,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
    opacity: 1,
    boxSizing: 'border-box',
    position: 'relative',
    '&:before, &:after': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: '0.75rem',
      color: theme.palette.text.primary,
    },
    '&:before': {
      content: "'PT'",
      left: 9,
    },
    '&:after': {
      content: "'EN'",
      right: 9,
    },
  },
}));

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isEn = i18n.language?.startsWith('en');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetLang: SupportedLang = event.target.checked ? 'en' : 'pt';
    const targetPath = getEquivalentPath(location.pathname, targetLang);

    i18n.changeLanguage(targetLang);
    navigate(targetPath);
  };

  return (
    <StyledSwitch
      checked={Boolean(isEn)}
      onChange={handleChange}
    />
  );
};

export default LanguageSwitch;
