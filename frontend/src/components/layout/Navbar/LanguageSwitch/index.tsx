import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getEquivalentPath, type SupportedLang } from '@/i18n/routesMap';
import { useCurrentLang } from '@/i18n/useLocalizedPath';
import { StyledSwitch } from './StyledSwitch';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = useCurrentLang();
  const isEn = currentLang === 'en';

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
