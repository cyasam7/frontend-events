import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import Login from '../pages/Login';

const NoSessionRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* System Routes */}
				<Route path={'/login'} element={<Login />} />
				{/* 	<Route path='/reset-password' component={ResetPassword} />
				<Route path='/account-created' component={AccountCreated} />
				<Route exact path='/register' component={Register} />
				<Route path='/forgot-password' component={ForgotPassword} />
				<Route path='/confirm-email' component={ConfirmEmail} />
				<Route path='/request-code' component={RequestCode} />
				<Route path='/login-code' component={LoginWithCode} />
				<Route path='/member-sign-up' component={SignInMember} />
				<Route path='/startup-sign-up' component={SignInStartup} />
				<Route path='/pre-register-member' component={MemberPreRegister} />
				<Route path='/pre-register-startup' component={StartupRegister} />
				<Route path='/register-member' component={MemberRegister} />
				<Route path='/calendly' component={Calendly} /> */}
				{/* <Route render={() => <Redirect to="/login" />} /> */}
				<Route path='*' element={<Navigate to='/login' replace />} />
			</Routes>
		</Router>
	);
};

export default NoSessionRoutes;
