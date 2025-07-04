import styled from "styled-components/native";
import { colors } from "../../../styles/styleVariables";
import { Feather } from "@expo/vector-icons";

export const Olho = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: flex-end;
  margin-right: 10%;
  height: 100%;
  position: absolute;
`;

export const Icon = styled(Feather)`
  font-size: 25px;
  color: ${colors.gray};
  position: relative;
  bottom: 2.5px;
  right: 10px;
`;
