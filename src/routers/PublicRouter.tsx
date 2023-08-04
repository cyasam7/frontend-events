import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login 1/Login';

const PublicRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/login'} element={<Login />} />
				<Route path={'/register'} element={<Login />} />
				<Route path='*' element={<Navigate to='/login' replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRouter;
