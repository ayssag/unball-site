import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from "react";
import {
    Box,
    Stack,
    Card, 
    CardHeader, 
    Typography,
    CardContent,
    MenuItem,
    Button,
    Alert,
    CircularProgress,
    alpha,
    useTheme
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledTextField } from "./StyledTextField";
import { ColoredCircle } from "@/components/common/ColoredCircle";
import {
    validateContactForm,
    SUBJECT_OPTIONS,
    type FormData,
    type FieldErrors,
} from "./contactValidation";

const INITIAL_FORM_DATA: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function ContactForm() {
    const { t } = useTranslation();
    const theme = useTheme();
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [formError, setFormError] = useState<string | undefined>();
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (fieldErrors[name as keyof FormData]) {
            setFieldErrors((prev) => {
                const next = { ...prev };
                delete next[name as keyof FormData];
                return next;
            });
            setFormError(undefined);
            if (status === "error") {
                setStatus("idle");
            }
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { fieldErrors: newFieldErrors, formError: newFormError } = validateContactForm(
            formData,
            t
        );

        if (Object.keys(newFieldErrors).length > 0 || newFormError) {
            setFieldErrors(newFieldErrors);
            setFormError(newFormError);
            setStatus("error");
            return;
        }

        setFieldErrors({});
        setFormError(undefined);
        setStatus("submitting");

        // TODO: substituir a simulação de envio por chamada real à API
        timeoutRef.current = setTimeout(() => {
            setStatus("success");
            setFormData(INITIAL_FORM_DATA);
        }, 800);
    };

    const alertSeverity = status === "success" ? "success" : status === "error" ? "error" : null;
    const alertMessage = status === "success" ? t("pages.home.contact.form.success") : formError;

    return (
        <Card
            sx={{
                width: "100%",
                padding: "0 !important",
                backgroundColor: "background.default",
                border: 1,
                borderColor: "border.main",
                boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.25)}`,
            }}
        >
            <CardHeader
                title={
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{ alignItems: "center" }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <ColoredCircle color={theme.palette.error.main} />
                            <ColoredCircle color={theme.palette.warning.main} />
                            <ColoredCircle color={theme.palette.success.main} />
                        </Stack>
                        <Typography variant="h6" sx={{ fontSize: "0.625rem" }}>
                            TERMINAL_SECURE
                        </Typography>
                    </Stack>
                }
                sx={{
                    backgroundColor: alpha(theme.palette.secondary.main, 0.4),
                    py: 1.2,
                    px: 2,
                }}
            />
            <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack spacing={3}>
                        <StyledTextField
                            value={t("pages.home.contact.form.command")}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        {alertSeverity && alertMessage && (
                            <Alert 
                                severity={alertSeverity} 
                                onClose={() => setStatus("idle")}
                                sx={{
                                    backgroundColor: alpha(theme.palette[alertSeverity].main, 0.15),
                                    color: "text.primary",
                                    border: 1,
                                    borderColor: `${alertSeverity}.main`,
                                    fontFamily: theme.typography.fontFamilyMono,
                                    fontSize: "0.8rem",
                                }}
                            >
                                {alertMessage}
                            </Alert>
                        )}

                        <StyledTextField
                            label={t("pages.home.contact.form.name")}
                            placeholder={t("pages.home.contact.form.namePlaceholder")}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            error={Boolean(fieldErrors.name)}
                            helperText={fieldErrors.name}
                        />

                        <StyledTextField
                            label={t("pages.home.contact.form.email")}
                            placeholder={t("pages.home.contact.form.emailPlaceholder")}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            error={Boolean(fieldErrors.email)}
                            helperText={fieldErrors.email}
                        />

                        <StyledTextField
                            label={t("pages.home.contact.form.subject")}
                            select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            error={Boolean(fieldErrors.subject)}
                            helperText={fieldErrors.subject}
                        >
                            <MenuItem value="" disabled sx={{ color: alpha(theme.palette.text.primary, 0.4) }}>
                                <em>{t("pages.home.contact.form.subjectPlaceholder")}</em>
                            </MenuItem>
                            {SUBJECT_OPTIONS.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {t(`pages.home.contact.form.subjectOptions.${option}`)}
                                </MenuItem>
                            ))}
                        </StyledTextField>

                        <StyledTextField
                            label={t("pages.home.contact.form.message")}
                            placeholder={t("pages.home.contact.form.messagePlaceholder")}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={3}
                            error={Boolean(fieldErrors.message)}
                            helperText={fieldErrors.message}
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}>
                            <Button
                                type="submit"
                                variant="outlined"
                                disabled={status === "submitting"}
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontWeight: "bold"
                                }}
                            >
                                {status === "submitting" ? (
                                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                                        <CircularProgress size={16} color="inherit" />
                                        <span>{t("pages.home.contact.form.sending")}</span>
                                    </Stack>
                                ) : (
                                    t("pages.home.contact.form.submit")
                                )}
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ContactForm;