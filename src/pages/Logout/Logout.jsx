import { useEffect } from 'react';
import useAuthStore from '../../stores/auth';

export default function Logout({ navigation }) {
	const clear = useAuthStore((state) => state.clearAuth);

	useEffect(() => {
		clear();

		console.log('clear');

		navigation.replace('Login');
	}, []);

	return null;
}
