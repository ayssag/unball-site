export const contact = {
    title: "CONTACT",
    subtitle: "// CONTACT US",
    description: "Got questions about the project, want to apply to the selection process, or propose a partnership? Send us a message.",
    form: {
        command: "> ./start_communication.sh",
        name: "NAME",
        namePlaceholder: "Visitor",
        email: "EMAIL",
        emailPlaceholder: "visitor@domain.com",
        subject: "SUBJECT",
        subjectPlaceholder: "Select subject...",
        subjectOptions: {
            questions: "General Questions",
            selection: "Selection Process",
            partnerships: "Partnerships & Sponsorship",
            other: "Other"
        },
        message: "MESSAGE",
        messagePlaceholder: "Type your text...",
        submit: "SEND",
        sending: "SENDING...",
        success: "[OK] Message sent successfully! We will get in touch soon.",
        errors: {
            requiredField: "Required field",
            invalidEmail: "Invalid email",
            missingFields: "Please fill in all required fields.",
            invalidEmailFormat: "Please enter a valid email format."
        }
    },
    items: [
        {
            type: "email",
            title: "E-mail",
            value: "equipe.unball@gmail.com",
            link: "mailto:equipe.unball@gmail.com",
            icon: "Email"
        },
        {
            type: "github",
            title: "GitHub",
            value: "unball",
            link: "https://github.com/unball",
            icon: "GitHub"
        },
        {
            type: "instagram",
            title: "Instagram",
            value: "@equipe.unball",
            link: "https://www.instagram.com/equipe.unball/",
            icon: "Instagram"
        },
        {
            type: "linkedin",
            title: "Linkedin",
            value: "UnBall",
            link: "https://www.linkedin.com/company/unball/",
            icon: "LinkedIn"
        }
    ]
}