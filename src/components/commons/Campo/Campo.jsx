import { Controller } from 'react-hook-form';
import { Container, Erro, Input } from './Styles';

export default function Campo({ name, control, error, resetError, ...rest }) {
	return (
		<Container>
			{error && <Erro>{error.message}</Erro>}
			<Controller
				control={control}
				name={name}
				render={({
					field: { onChange, onBlur, value },
					fieldState: { err },
				}) => (
					<Input
						onBlur={onBlur}
						onChangeText={(txt) => {
							onChange(txt);

							if (resetError) resetError();
						}}
						value={value}
						{...rest}
					/>
				)}
			/>
		</Container>
	);
}
