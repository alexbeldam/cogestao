import styled from 'styled-components/native';
import { colors } from '../../../styles/styleVariables';

export const Container = styled.View`
	gap: 10px;
	width: 80%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.TextInput`
	background-color: ${colors.white};
	height: 30px;
	font-size: 25px;
	color: ${colors.gray};
	border-radius: 25px;
	padding-left: 10px;
	width: 100%;
`;

export const Erro = styled.Text`
	font-size: 22px;
	color: ${colors.red};
`;
