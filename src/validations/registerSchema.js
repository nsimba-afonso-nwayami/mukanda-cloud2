import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("O nome de utilizador é obrigatório.")
    .min(3, "O nome de utilizador deve ter pelo menos 3 caracteres.")
    .max(30, "O nome de utilizador não pode ter mais de 30 caracteres."),

  email: yup
    .string()
    .trim()
    .required("O email é obrigatório.")
    .email("Introduza um email válido."),

  first_name: yup
    .string()
    .trim()
    .required("O nome é obrigatório.")
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(50, "O nome não pode ter mais de 50 caracteres."),

  last_name: yup
    .string()
    .trim()
    .required("O apelido é obrigatório.")
    .min(2, "O apelido deve ter pelo menos 2 caracteres.")
    .max(50, "O apelido não pode ter mais de 50 caracteres."),

  password: yup
    .string()
    .required("A palavra-passe é obrigatória.")
    .min(8, "A palavra-passe deve ter pelo menos 8 caracteres.")
    .matches(/[A-Z]/, "A palavra-passe deve conter pelo menos uma letra maiúscula.")
    .matches(/[a-z]/, "A palavra-passe deve conter pelo menos uma letra minúscula.")
    .matches(/[0-9]/, "A palavra-passe deve conter pelo menos um número."),

  password_confirm: yup
    .string()
    .required("Confirme a sua palavra-passe.")
    .oneOf(
      [yup.ref("password")],
      "As palavras-passe não coincidem."
    ),
});
