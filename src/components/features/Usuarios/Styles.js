import styled from "styled-components/native";
import { colors } from "../../../styles/styleVariables";
import { Feather } from "@expo/vector-icons";
import Campo from "../../commons/Campo/Campo";

export const Container = styled.View`
  width: 90%;
`;

export const Head = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: 2px;
  border-color: ${colors.white};
  border-style: solid;
  height: 60px;
  align-items: center;
`;

export const Header = styled.Text`
  color: ${colors.white};
  width: ${100 / 3}%;
  text-align: center;
  font-size: 25px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: ${(props) => (props.last ? 0 : 2)}px;
  border-color: ${colors.white};
  border-style: solid;
  min-height: 60px;
  align-items: center;
`;

export const Data = styled.Text`
  color: ${colors.white};
  width: ${(props) => (props.solo ? 100 : 100 / 3)}%;
  text-align: center;
  font-size: 20px;
`;

export const Editar = styled.View`
  width: ${100 / 3}%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${colors.white};
  font-size: 22px;
`;

export const Input = styled(Campo)`
  border: 1px solid black;
  padding-top: 2px;
  padding-bottom: 2px;
`;
