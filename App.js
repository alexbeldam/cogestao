import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/toastConfig';
import Routes from './src/routes';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: false } },
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
			<Toast config={toastConfig} position="top" visibilityTime={2000} />
		</QueryClientProvider>
	);
}
