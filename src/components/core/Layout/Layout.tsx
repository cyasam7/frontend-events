import { FC, ReactElement, Suspense } from 'react';
import { CssBaseline } from '@mui/material';

import ToolbarLayout from './ToolbarLayout';
import SidebarLayout from './Sidebar';
import { useAppSelector } from '../../../redux/hooks';

import { MainLayout, MainHeaderLayout } from '../../styled/MainSection';
import LoadingProgress from '../LoadingProgress';

type Props = {
	children: ReactElement;
};

const Layout: FC<Props> = ({ children }) => {
	const open = useAppSelector((state) => state.Layout.isOpenDrawer);

	return (
		<div className='flex h-screen'>
			<CssBaseline />
			<ToolbarLayout open={open} />
			<SidebarLayout open={open} />
			<MainLayout open={open}>
				<MainHeaderLayout />
				<Suspense fallback={<LoadingProgress text='Cargando pagina' />}>
					{children}
				</Suspense>
			</MainLayout>
		</div>
	);
};

export default Layout;
