import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

const PrivateRoutes = ({ children }: { children: any }) => {
	const auth = useAuth();
	return auth.signed ? children : <Navigate to='/' />;
};

export default PrivateRoutes;
