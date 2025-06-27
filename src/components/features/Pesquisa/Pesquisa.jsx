import { Container, Input, Icon, Lupa } from './Styles';

export default function Pesquisa({ busca, setBusca, ...rest }) {
	return (
		<Container {...rest}>
			<Lupa>
				<Icon name="search" />
			</Lupa>
			<Input
				placeholder="Pesquisar usuários"
				value={busca}
				onChangeText={setBusca}
			/>
		</Container>
	);
}
