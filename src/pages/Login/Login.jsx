import { Campo, Senha, Botao } from "../../components";
import { Container, Title, Form, Erro } from "./Styles";
import { useLogin } from "../../hooks/login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "./utils";
import useAuthStore from "../../stores/auth";
import { useState } from "react";
import { logout } from "../../utils/logout";

export default function Login({ navigation }) {
  const setToken = useAuthStore((state) => state.setToken);
  const usuario = useAuthStore((state) => state.usuario);
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidationSchema) });

  const { mutateAsync: postLogin, isPending } = useLogin({
    onSuccess: () => {
      if (usuario?.permissao) {
        reset();
        return;
      }

      logout();

      setError("Acesso Restrito");
    },
    onError: (err) => {
      const { data } = err.response;

      setError(data.message || "Erro de autenticação");
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
          name='email'
          error={errors.email}
          placeholder='E-mail'
          resetError={() => setError("")}
        />
        <Senha
          control={control}
          name='senha'
          error={errors.senha}
          placeholder='Senha'
          resetError={() => setError("")}
        />
        <Botao title='ENTRAR' yellow onPress={handleSubmit(onSubmit)} />
      </Form>
    </Container>
  );
}
