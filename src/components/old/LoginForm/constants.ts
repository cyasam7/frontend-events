import { IFieldSchema } from "../Form";

export const loginFieldsSchema: IFieldSchema[] = [
  {
    name: "email",
    validations: {
      maxLength: {
        max: 64,
        errorMessage: "El correo no puede tener mas de 64 caracteres",
      },
      emailFormat: {
        errorMessage: "El correo no es válido",
      },
      required: {
        errorMessage: "Ingresa tu correo",
      },
    },
    value: "",
  },
  {
    name: "password",
    validations: {
      required: {
        errorMessage: "La contraseña es requerida",
      },
    },

    value: "",
  },
  {
    name: "remindMeSession",
    value: false,
  },
];
