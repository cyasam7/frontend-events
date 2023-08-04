import React, { ReactElement } from 'react';

const LoginLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
	return (
		<div className='flex justify-center items-center h-screen w-screen bg-slate-50'>
			<div className='flex h-full w-full'>
				<div className='h-full sm:w-2/6 w-full'>{children}</div>
				<div className='h-full sm:w-4/6 bg-slate-800'></div>
			</div>
		</div>
	);
};

export default LoginLayout;
