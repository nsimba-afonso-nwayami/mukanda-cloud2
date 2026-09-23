import * as yup from "yup";

export const empresaSchema = yup.object({
  name: yup
    .string()
    .required("O nome da empresa é obrigatório.")
    .min(2, "O nome deve ter pelo menos 2 caracteres."),

  nif: yup
    .string()
    .required("O NIF é obrigatório.")
    .min(5, "Informe um NIF válido."),

  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("Informe um email válido."),

  phone: yup
    .string()
    .required("O telefone é obrigatório.")
    .min(9, "Informe um telefone válido."),

  website: yup
    .string()
    .nullable()
    .notRequired(),

  address: yup
    .string()
    .required("O endereço é obrigatório.")
    .min(3, "Informe um endereço válido."),
});
