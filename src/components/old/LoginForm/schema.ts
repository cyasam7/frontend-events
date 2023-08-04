import * as yup from 'yup';
import {
	CAMPO_REQUERIDO,
	CORREO_NO_VALIDO,
} from '../../../utils/messages/inputs';

export const loginSchema = yup.object({
	email: yup.string().email(CORREO_NO_VALIDO).required(CAMPO_REQUERIDO),
	password: yup.string().required(CAMPO_REQUERIDO),
});
