import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useNavigate } from 'react-router-dom';

import { ISidebarItemProps } from './ISidebarItemProps';
import { styles } from './styles';
import SubItem from './SubItem';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeMenuItemByIndex } from '../../../../flows/layout/SliceLayout';

const SidebarItem: React.FC<ISidebarItemProps> = ({
	icon: Icon,
	itemMenuName,
	subPage,
	path,
	index,
}) => {
	const menuItems = useAppSelector((state) => state.Layout.menuItems);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isOpen = !!menuItems.find((item) => item.index === index)?.open;
	const isNestedItem = subPage;

	const handleClickPageItem = () => {
		if (path) {
			navigate(path, { replace: true });
		} else {
			dispatch(changeMenuItemByIndex(index));
		}
	};

	return (
		<>
			<ListItemButton onClick={handleClickPageItem} sx={styles.listItemButton}>
				<ListItemIcon sx={{ color: 'inherit' }}>
					<Icon />
				</ListItemIcon>
				<ListItemText
					primary={itemMenuName}
					primaryTypographyProps={styles.listItemText}
				/>
				{isNestedItem && (isOpen ? <ExpandLess /> : <ExpandMore />)}
			</ListItemButton>
			{subPage && <SubItem isOpen={isOpen} subPage={subPage} />}
		</>
	);
};

export default SidebarItem;
