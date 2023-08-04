import { useEffect } from 'react';
import LoadingProgress from './components/core/LoadingProgress';
import { checkUser } from './flows/auth/AuthThunk';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import PrivateRouter from './routers/PrivateRouter';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import NoSessionRoutes from './routers/no-session-routes';

function App() {
	const { auth, loading } = useAppSelector((state) => state.Auth);
	const dispatch = useAppDispatch();

	/* useEffect(() => {
		dispatch(checkUser());
	}, []); */

	/* if (loading) {
		return <LoadingProgress text='Cargando pagina' />;
	} */

	return (
		<ScopedCssBaseline>
			<PrivateRouter />
		</ScopedCssBaseline>
	);
}

export default App;
