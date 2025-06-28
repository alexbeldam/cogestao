import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { colors } from './styles/styleVariables';

export const toastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{
				borderLeftColor: colors.green,
				backgroundColor: colors.black,
				borderRadius: 8,
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 16,
				fontWeight: 'bold',
				color: colors.white,
			}}
			text2Style={{
				fontSize: 14,
				color: colors.white,
			}}
		/>
	),
	error: (props) => (
		<ErrorToast
			{...props}
			style={{
				borderLeftColor: colors.red,
				backgroundColor: colors.black,
				borderRadius: 8,
			}}
			text1Style={{
				fontSize: 16,
				fontWeight: 'bold',
				color: colors.white,
			}}
			text2Style={{
				fontSize: 14,
				color: colors.white,
			}}
		/>
	),
};
