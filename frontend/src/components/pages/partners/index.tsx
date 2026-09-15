import { useTranslation } from 'react-i18next';

function Partners() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('pages.partners.title')}</h1>
    </div>
  );
}

export default Partners;