import { Container } from './Styles';
import { Pesquisa, Usuarios } from '../../components';
import { useState } from 'react';
import { Button } from 'react-native';

export default function Home({ navigation }) {
	const [busca, setBusca] = useState('');

	return (
		<Container>
			<Pesquisa busca={busca} setBusca={setBusca} />
			<Usuarios busca={busca} />
			{/*<Button title="Sair" onPress={() => navigation.replace('Logout')} />*/}
		</Container>
	);
}
