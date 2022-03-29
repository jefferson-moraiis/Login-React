import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #ffff',
	borderRadius: 3,
	boxShadow: 24,
	p: 4,
};

interface IProps {
	open: boolean;
	setOpen: (value: any) => void;
	title: string;
	description: string;
}

const BasicModal: React.FC<IProps> = ({
	open = false,
	setOpen = () => {},
	title,
	description,
}) => {
	const onClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						{title}
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						{description}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default BasicModal;
