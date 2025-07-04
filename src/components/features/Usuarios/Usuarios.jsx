import { Container, Head, Header, Row, Data } from "./Styles";
import EditarUsuario from "./EditarUsuario";
import useAuthStore from "../../../stores/auth";
import { useGetUsers } from "../../../hooks/usuarios";

export default function Usuarios({ busca }) {
  const usuario = useAuthStore((state) => state.usuario);
  const { data, isLoading } = useGetUsers({});

  const removerDiacriticos = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const usuarios = data?.usuarios
    ?.filter((u) => u._id !== usuario._id)
    ?.filter((u) => removerDiacriticos(u.nome).includes(removerDiacriticos(busca)));

  return (
    <Container>
      <Head>
        <Header>Nome</Header>
        <Header>Cargo</Header>
        <Header>Ações</Header>
      </Head>
      {isLoading ? (
        <Row last>
          <Data solo>Carregando...</Data>
        </Row>
      ) : usuarios?.length ? (
        usuarios.map((u, id) => {
          return (
            <Row last={id == usuarios.length - 1} key={`tr-${id}`}>
              <Data>{u.nome}</Data>
              <Data>{u.cargo}</Data>
              <EditarUsuario user={u} />
            </Row>
          );
        })
      ) : (
        <Row last>
          <Data solo>Nenhum usuário encontrado</Data>
        </Row>
      )}
    </Container>
  );
}
