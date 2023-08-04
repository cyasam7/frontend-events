import { SvgIconComponent } from '@mui/icons-material';
import { ERoles, ISubPage } from '../../../../types';

export interface ISidebarItemProps {
	path?: string;
	itemMenuName: string;
	icon: SvgIconComponent;
	roles?: ERoles[];
	subPage?: ISubPage[];
	index: number;
}
