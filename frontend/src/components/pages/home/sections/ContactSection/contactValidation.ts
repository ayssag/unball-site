export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof FormData, string>>;

export interface ValidationResult {
  fieldErrors: FieldErrors;
  formError?: string;
}

export const SUBJECT_OPTIONS = [
  "questions",
  "selection",
  "partnerships",
  "other",
] as const;

export type SubjectKey = (typeof SUBJECT_OPTIONS)[number];

export function validateContactForm(
  formData: FormData,
  t: (key: string) => string
): ValidationResult {
  const fieldErrors: FieldErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fields: (keyof FormData)[] = ["name", "email", "subject", "message"];

  fields.forEach((field) => {
    if (!formData[field].trim()) {
      fieldErrors[field] = t("pages.home.contact.form.errors.requiredField");
    }
  });

  if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
    fieldErrors.email = t("pages.home.contact.form.errors.invalidEmail");
  }

  let formError: string | undefined;

  if (Object.keys(fieldErrors).length > 0) {
    const hasEmptyField = fields.some((f) => !formData[f].trim());
    if (hasEmptyField) {
      formError = t("pages.home.contact.form.errors.missingFields");
    } else if (fieldErrors.email) {
      formError = t("pages.home.contact.form.errors.invalidEmailFormat");
    }
  }

  return { fieldErrors, formError };
}
