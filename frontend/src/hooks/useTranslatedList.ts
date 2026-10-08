import { useTranslation } from "react-i18next";


export function useTranslatedList<T>(key: string): T[] {
    const { t } = useTranslation();
    const value: unknown = t(key, { returnObjects: true });
    return Array.isArray(value) ? (value as T[]) : [];
}
