import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Logout } from './pages';
import { colors } from './styles/styleVariables';
const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerStyle: {
						backgroundColor: colors.yellow,
					},
					headerTintColor: colors.black,
					headerTitle: 'GERENCIAR USUÁRIOS',
					headerTitleStyle: {
						fontSize: '25',
					},
				}}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerStyle: {
						backgroundColor: colors.yellow,
					},
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name="Logout"
				component={Logout}
				options={{
					headerStyle: {
						backgroundColor: colors.yellow,
					},
					headerTitle: '',
				}}
			/>
		</Stack.Navigator>
	);
}
