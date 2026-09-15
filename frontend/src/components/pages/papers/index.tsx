import { useTranslation } from 'react-i18next';

function Papers() {
  const { t } = useTranslation();
  return <h1>{t('pages.papers.title')}</h1>;
}

export default Papers;