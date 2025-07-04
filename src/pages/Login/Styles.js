import styled from "styled-components/native";
import { colors } from "../../styles/styleVariables";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Form = styled.View`
  gap: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${colors.yellow};
`;

export const Erro = styled.Text`
  font-size: 25px;
  color: ${colors.red};
`;
