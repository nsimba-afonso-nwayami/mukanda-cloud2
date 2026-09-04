import * as yup from "yup";

export const settingsSchema = yup.object({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(3, "O nome deve ter pelo menos 3 caracteres."),

  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("Informe um email válido."),

  phone: yup
    .string()
    .required("O telefone é obrigatório.")
    .min(9, "Informe um telefone válido."),

  department: yup.string().required("O departamento é obrigatório."),

  role: yup.string(),
});
