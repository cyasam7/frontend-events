import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import LoginForm from '../../components/old/LoginForm';
import LoginLayout from '../../components/old/LoginLayout';

import styles from './styles';

const Login: React.FC = () => {
	return (
		<LoginLayout showBanner>
			<Card>
				<CardContent sx={styles.cardContent}>
					<LoginForm />
				</CardContent>
			</Card>
		</LoginLayout>
	);
};

export default Login;
