import { CssBaseline } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { ERoles } from '../types';
import { AllRoutes } from './routes';

const PrivateRouter = () => {
	const { user } = useAppSelector((state) => state.Auth);

	const routes = AllRoutes.filter((route) => route);

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) =>
					route.layout ? (
						<Route
							key={index}
							path={route.path}
							element={
								<route.layout key={index}>
									<route.component />
								</route.layout>
							}
						/>
					) : (
						<Route
							key={index}
							path={route.path}
							element={<route.component />}
						/>
					)
				)}
				<Route path='*' element={<Navigate to={'/dashboard'} replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PrivateRouter;
