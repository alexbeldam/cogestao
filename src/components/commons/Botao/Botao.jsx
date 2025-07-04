import { Button, Titulo } from "./Styles";

export default function Botao({ title, ...rest }) {
  return (
    <Button {...rest}>
      <Titulo>{title}</Titulo>
    </Button>
  );
}
