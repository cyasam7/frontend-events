import { Grid, Typography, Box } from '@mui/material';
import { ReactElement } from 'react';

import logo from '../../../assets/images/logo-color_negro.png';
import banner from '../../../assets/images/vision.jpeg';
import Footer from '../DashboardLayout/footer';

import styles, { Logo, Banner } from './styles';

interface ILoginLayout {
	showBanner: boolean;
	path?: string;
	children: ReactElement;
}

const LoginLayout: React.FC<ILoginLayout> = ({
	showBanner,
	children,
	path,
}) => {
	return (
		<Grid sx={styles.container}>
			<Box sx={styles.cardContainer}>
				<Logo
					src={logo}
					alt='logo'
					largeScreen={path === '/register'} // Prop to handle screen with scroll
				/>
				{children}
				{/* <Box sx={styles.privacyWrapper}>
          <Link sx={styles.privacyText} underline="none">
            Términos y condiciones
          </Link>
          <Typography sx={styles.separator}>|</Typography>
          <Link sx={styles.privacyText} underline="none">
            Política de privacidad
          </Link>
        </Box> */}
				<Footer path={path} />
			</Box>
			{showBanner && (
				<Box sx={{ ...styles.imageContainer, position: 'relative' }}>
					<Banner src={banner} alt='banner' />
					<Box
						sx={{
							position: 'absolute',
							top: '20%',
							left: '10%',
							maxWidth: 637,
						}}
					>
						<Typography
							sx={{
								fontSize: '60px',
								color: '#fff',
							}}
						>
							BIENVENIDO A LA PLATAFORMA DE INVERSIÓN ÁNGEL DE LATINOAMÉRICA
						</Typography>
						<Typography
							sx={{
								marginTop: '8px',
								fontSize: '26px',
								color: '#fff',
							}}
						>
							Conectamos y acompañamos a Ángeles y Emprendedores. La forma más
							sencilla, rápida y segura de invertir en las startups Mexicanas y
							Latinas de mayor potencial.
						</Typography>
					</Box>
				</Box>
			)}
		</Grid>
	);
};

export default LoginLayout;
