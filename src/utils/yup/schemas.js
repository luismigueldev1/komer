import * as yup from "yup"

export const signupSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(4, "El nombre debe tener 4 caracteres o más"),
  email: yup
    .string()
    .email("El email no es correcto")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener 6 caracteres o más"),
  check: yup.boolean().oneOf([true], "Debes aceptar los terminos y condiciones")
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("El email no es correcto")
    .required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria")
})
