import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Login from '../pages/login';
import Home from '../pages/home';

const Routers: React.FC = () => (
	<Routes>
		<Route path='/' element={<Login />} />
		<Route
			path='/home'
			element={
				<PrivateRoutes>
					<Home />
				</PrivateRoutes>
			}
		/>
	</Routes>
);

export default Routers;
