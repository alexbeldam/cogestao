import { Campo, Senha, Botao } from '../../components';
import { Container, Title, Form, Erro } from './Styles';
import { useLogin } from '../../hooks/login';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from './utils';
import useAuthStore from '../../stores/auth';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function Login({ navigation }) {
	const { setToken, clearAuth, usuario } = useAuthStore.getState();
	const [error, setError] = useState('');

	useEffect(() => {
		if (usuario?.permissao) navigation.replace('Home');
	}, [usuario]);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginValidationSchema) });

	const { mutateAsync: postLogin, isPending } = useLogin({
		onSuccess: (data) => {
			const { token } = data;
			const { usuario } = jwtDecode(token);

			if (usuario?.permissao) {
				reset();
				navigation.replace('Home');
				return;
			}

			clearAuth();

			setError('Acesso Restrito');
		},
		onError: (err) => {
			const { data } = err.response;

			setError(data.message);
		},
	});

	async function onSubmit(data) {
		const { token } = await postLogin(data);

		setToken(token);
	}

	return (
		<Container>
			<Title>LOGIN</Title>

			{error && <Erro>{error}</Erro>}

			<Form>
				<Campo
					control={control}
					name="email"
					error={errors.email}
					placeholder="E-mail"
					resetError={() => setError('')}
				/>
				<Senha
					control={control}
					name="senha"
					error={errors.senha}
					placeholder="Senha"
					resetError={() => setError('')}
				/>
				<Botao title="ENTRAR" yellow onPress={handleSubmit(onSubmit)} />
			</Form>
		</Container>
	);
}
