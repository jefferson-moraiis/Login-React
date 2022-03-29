import React, { createContext, useState, useEffect, useContext } from 'react';

import { ApiAuth } from '../services/api';

interface AuthContextData {
	signed: boolean;
	user: object | null;
	Login(user: object): Promise<void>;
	Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<object | null>(null);

	useEffect(() => {
		const storagedUser = JSON.stringify(
			sessionStorage.getItem('@App:user')
		);
		const storagedToken = JSON.stringify(
			sessionStorage.getItem('@App:token')
		);
		if (storagedToken && storagedUser) {
			setUser(JSON.parse(storagedUser));
		}
	}, []);

	async function Login(userData: object) {
		try {
			const response = await ApiAuth.post('login', userData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setUser(response.data.email);

			sessionStorage.setItem('@App:user', response.data.email);
			sessionStorage.setItem('@App:token', response.data.token);
		} catch (error) {
			setUser(null);
		}
	}

	function Logout() {
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ signed: Boolean(user), user, Login, Logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}
