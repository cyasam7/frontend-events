import React from 'react';
import {
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const SubItem: React.FC<{ subPage: any[]; isOpen: boolean }> = ({
	subPage,
	isOpen,
}) => {
	const navigate = useNavigate();

	const handleClickSubPageItems = (index: number) => () => {
		if (subPage) navigate(subPage[index].path);
	};

	return (
		<Collapse in={isOpen} timeout='auto' unmountOnExit>
			<List component='div' disablePadding>
				{subPage.map((subPage, index) => (
					<ListItemButton
						onClick={handleClickSubPageItems(index)}
						sx={{ pl: 4, ...styles.listItemButton }}
						key={index}
					>
						<ListItemIcon sx={{ color: 'inherit' }}>
							<subPage.icon />
						</ListItemIcon>
						<ListItemText
							primaryTypographyProps={styles.listItemText}
							primary={subPage.itemMenuName}
						/>
					</ListItemButton>
				))}
			</List>
		</Collapse>
	);
};

export default SubItem;
