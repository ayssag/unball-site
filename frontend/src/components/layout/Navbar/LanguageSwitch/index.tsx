import type { ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEquivalentPath, type SupportedLang } from '@/i18n/routesMap';
import { useCurrentLang } from '@/i18n/useLocalizedPath';
import { StyledSwitch } from './StyledSwitch';

export function LanguageSwitch() {
  const location = useLocation();
  const navigate = useNavigate();

  const isEn = useCurrentLang() === 'en';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetLang: SupportedLang = event.target.checked ? 'en' : 'pt';
    // O LanguageGuard sincroniza o i18n a partir da URL.
    navigate(getEquivalentPath(location.pathname, targetLang));
  };

  return <StyledSwitch checked={isEn} onChange={handleChange} />;
}
