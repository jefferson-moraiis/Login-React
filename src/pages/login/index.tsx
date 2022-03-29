import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

const theme = createTheme();

export default function Login() {
	const navigate = useNavigate();
	const { Login } = useAuth();
	const [loading, setLoading] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [titleModal, setTitleModal] = React.useState('');
	const [descriptionModal, setDescriptionModal] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			setLoading(true);
			await Login({ email: email, password: password });
			navigate('/home');
		} catch (error) {
			setTitleModal('Erro ao Efetuar Login');
			setDescriptionModal(`${error}`);
			setOpenModal(true);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Login
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							onChange={(e) => setEmail(e.target.value)}
							inputProps={{ 'data-testid': 'email' }}
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
							inputProps={{ 'data-testid': 'password' }}
							autoFocus
						/>
						<Button
							data-testid='submit'
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
					</Box>
				</Box>
				{loading && <Loading />}
				<Modal
					open={openModal}
					setOpen={() => setOpenModal(false)}
					title={titleModal}
					description={descriptionModal}
				/>
			</Container>
		</ThemeProvider>
	);
}
