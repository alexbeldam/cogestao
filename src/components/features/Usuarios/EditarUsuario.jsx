import EditarDados from './EditarDados';
import EditarAcesso from './EditarAcesso';
import Deletar from './Deletar';
import { Editar } from './Styles';

export default function EditarUsuario({ user }) {
	const id = user?._id;
	const nome = user?.nome;

	return (
		<Editar>
			<EditarDados id={id} nome={nome} cargo={user?.cargo} />
			<EditarAcesso id={id} acesso={user?.permissao} />
			<Deletar id={id} nome={nome} />
		</Editar>
	);
}
