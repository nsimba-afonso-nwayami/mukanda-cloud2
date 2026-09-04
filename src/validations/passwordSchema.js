import * as yup from "yup";

export const passwordSchema = yup.object({
  old_password: yup.string().required("A senha atual é obrigatória."),

  new_password: yup
    .string()
    .required("A nova senha é obrigatória.")
    .min(8, "A nova senha deve ter pelo menos 8 caracteres."),

  confirm_password: yup
    .string()
    .required("Confirme a nova senha.")
    .oneOf([yup.ref("new_password")], "As senhas não coincidem."),
});
