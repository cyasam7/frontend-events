/* eslint-disable no-unused-vars */
import { SvgIconComponent } from '@mui/icons-material';
import React, { ReactElement } from 'react';

export enum ERoles {
	GUEST_USER = 'GUEST_USER',
	DELIVERY_MAN = 'DELIVERY_MAN',
	LOCAL_ADMIN = 'LOCAL_ADMIN',
	ADMIN = 'ADMIN',
}

// eslint-disable-next-line no-use-before-define
export type ISubPage = Omit<IPage, 'subPage' | 'roles'>;

export interface IPage {
	component: React.LazyExoticComponent<() => ReactElement>;
	icon: SvgIconComponent;
	itemMenuName: string;
	roles: ERoles[];
	path?: string;
	isHideSidebar?: boolean;
	layout?: React.FC<any>;
	subPage?: ISubPage[];
}
