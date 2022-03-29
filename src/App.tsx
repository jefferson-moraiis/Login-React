import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes';
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
	return (
		<Router>
			<AuthProvider>
				<Routers />
			</AuthProvider>
		</Router>
	);
};

export default App;
