import { yupResolver } from '@hookform/resolvers/yup';
import {
	Button,
	CircularProgress,
	Grid,
	Typography,
	Link,
	Divider,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import appleLogo from '../../../assets/images/apple-logo.png';
import googleLogo from '../../../assets/images/google-logo.png';

import { TextInput } from '../Inputs';
import Checkbox from '../Inputs/Checkbox';
import PasswordFieldEye from '../PasswordFieldEye/PasswordFieldEye';

import { loginSchema } from './schema';
import styles, { GoogleLogo, AppleLogo } from './styles';

interface ILoginForm {
	googleLogin?: boolean;
	appleLogin?: boolean;
}

type FormType = {
	email: string;
	password: string;
	remindMeSession: boolean;
};

const LoginForm: React.VFC<ILoginForm> = ({ googleLogin, appleLogin }) => {
	/* const //history = use//History();
	const dispatch = useDispatch(); */
	const [loading, setLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		setError,
		control,
		formState: { isValid },
	} = useForm<FormType>({
		resolver: yupResolver(loginSchema),
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
			remindMeSession: false,
		},
	});

	const handleRegister = async (fields: FormType): Promise<void> => {
		const { email, password, remindMeSession } = fields;
		setLoading(true);
		try {
			//dispatch(login());
			const { data } = await axios.post('/login', { email, password });
			//dispatch(loginSuccessActions(data.payload, remindMeSession));
		} catch (error: any) {
			const message = error?.response?.data?.message;
			if (message === 'You need to confirm your email to be able to log in') {
				setError('password', {
					message: 'Necesitas confirmar tu correo electrónico.',
				});
				setError('email', { message: '' });
			} else {
				setError('password', { message: 'Usuario o contraseña incorrectos' });
				setError('email', { message: '' });
			}
		} finally {
			setLoading(false);
		}
	};

	const handleForgotPassword = (): void => {
		//history.push('forgot-password');
	};

	const handleRequestCode = () => {
		//history.push('request-code');
	};

	const handleKeyPress = (event: any) => {
		if (event.key === 'Enter' && isValid) {
			handleSubmit(handleRegister)();
		}
	};

	return (
		<Grid container direction='column'>
			<Typography variant='subtitle1' sx={styles.title}>
				Inicio de sesión
			</Typography>
			<Typography variant='subtitle2' sx={styles.subtitle}>
				Bienvenido, inicia sesión con correo electrónico o con código de acceso
			</Typography>
			<Grid item xs={12} sx={styles.topInputWrapper}>
				<Controller
					control={control}
					name='email'
					render={({ field, fieldState }) => (
						<TextInput
							{...field}
							inputRef={field.ref}
							disabled={loading}
							label='Correo'
							error={Boolean(fieldState.error)}
							helperText={
								Boolean(fieldState.error?.message) && fieldState.error?.message
							}
							fullWidth
							required
						/>
					)}
				/>
			</Grid>
			<Grid item xs={12} sx={styles.inputWrapper}>
				<Controller
					control={control}
					name='password'
					render={({ field, fieldState }) => (
						<PasswordFieldEye
							{...field}
							inputRef={field.ref}
							ref={field.ref}
							disabled={loading}
							label='Contraseña'
							type='password'
							error={Boolean(fieldState.error)}
							helperText={
								Boolean(fieldState.error?.message) && fieldState.error?.message
							}
							onKeyPress={handleKeyPress}
							fullWidth
						/>
					)}
				/>
			</Grid>
			<Grid item xs={12} sx={styles.optionsSection}>
				<Controller
					control={control}
					name='remindMeSession'
					render={({ field }) => (
						<Checkbox
							{...field}
							inputRef={field.ref}
							color='primary'
							label='Mantener sesión'
						/>
					)}
				/>
				<Link
					onClick={handleForgotPassword}
					underline='none'
					sx={styles.forgotPassword}
				>
					¿Olvidaste tu contraseña?
				</Link>
			</Grid>
			<Grid item xs={12} sx={styles.buttonWrapper}>
				{loading ? (
					<CircularProgress data-testid='loading-indicator' size={36} />
				) : (
					<Button
						onClick={handleSubmit(handleRegister)}
						variant='contained'
						color='primary'
						sx={styles.loginButton}
					>
						INICIAR SESIÓN
					</Button>
				)}
			</Grid>
			<Typography sx={styles.forgotAccount}>
				¿No tienes una cuenta?
				<Link underline='none' sx={styles.signUp}>
					Registrate
				</Link>
			</Typography>
			<Divider style={styles.formDivider}> O </Divider>
			<Button
				onClick={handleRequestCode}
				variant='outlined'
				sx={{ marginTop: '15px' }}
			>
				INICIAR CON CÓDIGO
			</Button>
			{(googleLogin || appleLogin) && (
				<Grid item xs={12}>
					{googleLogin && (
						<Grid item xs={12} sx={styles.buttonSeparator}>
							<Button
								variant='outlined'
								sx={styles.socialButton}
								fullWidth
								startIcon={<GoogleLogo src={googleLogo} alt='google' />}
							>
								Login with Google
							</Button>
						</Grid>
					)}
					{appleLogin && (
						<Grid item xs={12}>
							<Button
								variant='outlined'
								sx={styles.socialButton}
								fullWidth
								startIcon={<AppleLogo src={appleLogo} alt='apple' />}
							>
								Login with Apple
							</Button>
						</Grid>
					)}
				</Grid>
			)}
		</Grid>
	);
};

export default LoginForm;
