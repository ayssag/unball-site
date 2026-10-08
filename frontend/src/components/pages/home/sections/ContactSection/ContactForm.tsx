import { useState } from "react";
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

const ColoredCircle = ({ color }: { color: string }) => (
    <svg width={12} height={12}>
        <circle r={6} cx={6} cy={6} fill={color}/>
    </svg>
);

function ContactForm() {
    const { t } = useTranslation();
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                delete next.form;
                return next;
            });
            if (status === "error") {
                setStatus("idle");
            }
        }
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = t("pages.home.contact.form.errors.requiredField", "Campo obrigatório");
        }
        if (!formData.email.trim()) {
            newErrors.email = t("pages.home.contact.form.errors.requiredField", "Campo obrigatório");
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = t("pages.home.contact.form.errors.invalidEmail", "E-mail inválido");
        }
        if (!formData.subject.trim()) {
            newErrors.subject = t("pages.home.contact.form.errors.requiredField", "Campo obrigatório");
        }
        if (!formData.message.trim()) {
            newErrors.message = t("pages.home.contact.form.errors.requiredField", "Campo obrigatório");
        }

        if (Object.keys(newErrors).length > 0) {
            let formMsg = t("pages.home.contact.form.errors.missingFields", "Por favor, preencha todos os campos obrigatórios.");
            if (
                formData.name.trim() && 
                formData.email.trim() && 
                formData.subject.trim() && 
                formData.message.trim() && 
                !emailRegex.test(formData.email.trim())
            ) {
                formMsg = t("pages.home.contact.form.errors.invalidEmailFormat", "Por favor, insira um formato de e-mail válido.");
            }
            newErrors.form = formMsg;
            setErrors(newErrors);
            setStatus("error");
            return;
        }

        setErrors({});
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 800);
    };

    const alertSeverity = status === "success" ? "success" : status === "error" ? "error" : null;
    const alertMessage = status === "success" ? t("pages.home.contact.form.success") : errors.form;

    return (
        <Card
            sx={(theme) => ({
                width: "100%",
                p: 0,
                backgroundColor: "background.default",
                border: 1,
                borderColor: "border.main",
                boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.25)}`,
            })}
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
                sx={(theme) => ({
                    backgroundColor: alpha(theme.palette.secondary.main, 0.4),
                    py: 1.2,
                    px: 2,
                })}
            />
            <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack spacing={3}>
                        <StyledTextField
                            value={t("pages.home.contact.form.command", "> ./iniciar_comunicacao.sh")}
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
                                sx={(theme) => ({
                                    backgroundColor: alpha(theme.palette[alertSeverity].main, 0.15),
                                    color: "text.primary",
                                    border: 1,
                                    borderColor: `${alertSeverity}.main`,
                                    fontFamily: theme.typography.fontFamilyMono,
                                    fontSize: "0.8rem",
                                })}
                            >
                                {alertMessage}
                            </Alert>
                        )}

                        <StyledTextField
                            label={t("pages.home.contact.form.name", "NOME")}
                            placeholder={t("pages.home.contact.form.namePlaceholder", "Visitante")}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />

                        <StyledTextField
                            label={t("pages.home.contact.form.email", "EMAIL")}
                            placeholder={t("pages.home.contact.form.emailPlaceholder", "visitante@dominio.com")}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                        />

                        <StyledTextField
                            label={t("pages.home.contact.form.subject", "ASSUNTO")}
                            select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            error={Boolean(errors.subject)}
                            helperText={errors.subject}
                        >
                            <MenuItem value="" disabled sx={(theme) => ({ color: alpha(theme.palette.text.primary, 0.4) })}>
                                <em>{t("pages.home.contact.form.subjectPlaceholder", "Selecione o assunto...")}</em>
                            </MenuItem>
                            <MenuItem value="questions">
                                {t("pages.home.contact.form.subjectOptions.questions", "Dúvidas gerais")}
                            </MenuItem>
                            <MenuItem value="selection">
                                {t("pages.home.contact.form.subjectOptions.selection", "Processo Seletivo")}
                            </MenuItem>
                            <MenuItem value="partnerships">
                                {t("pages.home.contact.form.subjectOptions.partnerships", "Parcerias e Patrocínio")}
                            </MenuItem>
                            <MenuItem value="other">
                                {t("pages.home.contact.form.subjectOptions.other", "Outro assunto")}
                            </MenuItem>
                        </StyledTextField>

                        <StyledTextField
                            label={t("pages.home.contact.form.message", "MENSAGEM")}
                            placeholder={t("pages.home.contact.form.messagePlaceholder", "Digite seu texto...")}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={3}
                            error={Boolean(errors.message)}
                            helperText={errors.message}
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
                                        <span>{t("pages.home.contact.form.sending", "ENVIANDO...")}</span>
                                    </Stack>
                                ) : (
                                    t("pages.home.contact.form.submit", "ENVIAR")
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