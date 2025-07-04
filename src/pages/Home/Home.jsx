import { Container } from "./Styles";
import { Pesquisa, Usuarios } from "../../components";
import { useState } from "react";

export default function Home() {
  const [busca, setBusca] = useState("");

  return (
    <Container>
      <Pesquisa busca={busca} setBusca={setBusca} />
      <Usuarios busca={busca} />
    </Container>
  );
}
