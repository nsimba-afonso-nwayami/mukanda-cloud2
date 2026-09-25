import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("O nome de utilizador é obrigatório."),

  password: yup
    .string()
    .required("A palavra-passe é obrigatória."),
});
