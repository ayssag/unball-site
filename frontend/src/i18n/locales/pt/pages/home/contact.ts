export const contact = {
  title: "CONTATO",
  subtitle: "// FALE CONOSCO",
  description:
    "Tem dúvidas sobre o projeto, deseja se candidatar ao processo seletivo ou propor uma parceria? Envie sua mensagem pra gente.",
  form: {
    command: "> ./iniciar_comunicacao.sh",
    name: "NOME",
    namePlaceholder: "Visitante",
    email: "EMAIL",
    emailPlaceholder: "visitante@dominio.com",
    subject: "ASSUNTO",
    subjectPlaceholder: "Selecione o assunto...",
    subjectOptions: {
      questions: "Dúvidas gerais",
      selection: "Processo Seletivo",
      partnerships: "Parcerias e Patrocínio",
      other: "Outro assunto",
    },
    message: "MENSAGEM",
    messagePlaceholder: "Digite seu texto...",
    submit: "ENVIAR",
    sending: "ENVIANDO...",
    success:
      "[OK] Mensagem enviada com sucesso! Entraremos em contato em breve.",
    errors: {
      requiredField: "Campo obrigatório",
      invalidEmail: "E-mail inválido",
      missingFields: "Por favor, preencha todos os campos obrigatórios.",
      invalidEmailFormat: "Por favor, insira um formato de e-mail válido.",
    },
  },
  items: [
    {
      type: "email",
      title: "E-mail",
      value: "equipe.unball@gmail.com",
      link: "mailto:equipe.unball@gmail.com",
      icon: "Email",
    },
    {
      type: "github",
      title: "GitHub",
      value: "unball",
      link: "https://github.com/unball",
      icon: "GitHub",
    },
    {
      type: "instagram",
      title: "Instagram",
      value: "@equipe.unball",
      link: "https://www.instagram.com/equipe.unball/",
      icon: "Instagram",
    },
    {
      type: "linkedin",
      title: "Linkedin",
      value: "UnBall",
      link: "https://www.linkedin.com/company/unball/",
      icon: "LinkedIn",
    },
  ],
};
