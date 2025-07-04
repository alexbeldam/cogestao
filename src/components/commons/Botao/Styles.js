import styled from "styled-components/native";
import { colors } from "../../../styles/styleVariables";

export const Button = styled.TouchableOpacity`
  margin: 0 auto;
  background-color: ${(props) => (props.yellow ? colors.yellow : colors.orange)};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Titulo = styled.Text`
  color: ${colors.black};
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
