import {
	Button,
	Card,
	CardContent,
	Checkbox,
	Divider,
	FormControlLabel,
	Link,
	TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import LoginLayout from '../../components/core/LoginLayout/LoginLayout';
import { logIn } from '../../flows/auth/AuthThunk';
import { useAppDispatch } from '../../redux/hooks';

interface ILoginForm {
	email: string;
	password: string;
}

function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const formik = useFormik<ILoginForm>({
		initialValues: {
			email: 'cyasam7@gmail.com',
			password: 'Cyasam86&',
		},
		onSubmit,
	});

	function onSubmit({ email, password }: ILoginForm) {
		dispatch(logIn({ email, password }) as any);
	}

	function handleForgotPassword() {
		navigate('/register');
	}

	return (
		<LoginLayout>
			<div className='flex flex-col justify-center h-full gap-6 p-10'>
				<p className='text-3xl'>Iniciar sesion</p>
				<TextField
					value={formik.values.email}
					onChange={formik.handleChange('email')}
					label='Email'
					placeholder='Email'
				/>
				<TextField
					value={formik.values.password}
					onChange={formik.handleChange('password')}
					label='Password'
					type={'password'}
					placeholder='Password'
				/>
				<div className='flex justify-between items-center'>
					<FormControlLabel control={<Checkbox />} label='Remind Session' />
					<Link
						component={'button'}
						onClick={handleForgotPassword}
						underline='hover'
					>
						Forgot Password
					</Link>
				</div>
				<Button onClick={() => formik.handleSubmit()} variant='contained'>
					Iniciar sesion
				</Button>
				<Divider> Or </Divider>
				<Button variant='outlined'>Register</Button>
			</div>
		</LoginLayout>
	);
}

export default Login;
