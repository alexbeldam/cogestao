import { Container, Head, Header, Row, Data } from './Styles';
import EditarUsuario from './EditarUsuario';

const users = [
	{
		_id: '',
		nome: 'Alex Souza',
		cargo: 'Consultor de Tecnologia',
	},
	{
		_id: '',
		nome: 'Bernardo Amaral',
		cargo: 'Dev Líder',
		permissao: true,
	},
	{
		_id: '',
		nome: 'Gustavo Barroso',
		cargo: 'Consultor de Tecnologia',
	},
	{
		_id: '',
		nome: 'José Campos',
		cargo: 'Gerente',
		permissao: true,
	},
	{
		_id: '',
		nome: 'Paulo Orbolato',
		cargo: 'Consultor de Tecnologia',
	},
];

export default function Usuarios({ busca }) {
	const removerDiacriticos = (texto) =>
		texto
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();

	const usuarios = users?.filter((u) =>
		removerDiacriticos(u.nome).includes(removerDiacriticos(busca))
	);

	return (
		<Container>
			<Head>
				<Header>Nome</Header>
				<Header>Cargo</Header>
				<Header>Ações</Header>
			</Head>
			{usuarios?.map((u, id) => {
				return (
					u && (
						<Row last={id == usuarios.length - 1} key={`tr-${id}`}>
							<Data>{u?.nome}</Data>
							<Data>{u?.cargo}</Data>
							<EditarUsuario user={u} />
						</Row>
					)
				);
			})}
		</Container>
	);
}
