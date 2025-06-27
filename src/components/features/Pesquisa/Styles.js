import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../styles/styleVariables';

export const Container = styled.View`
	background-color: ${colors.white};
	border-radius: 25px;
	width: 90%;
	height: 25px;
	overflow: hidden;
`;

export const Input = styled.TextInput`
	font-size: 20px;
	padding-left: 30px;
	color: ${colors.gray};
`;

export const Icon = styled(Feather)`
	font-size: 20px;
	color: ${colors.gray};
`;

export const Lupa = styled.View`
	position: absolute;
	top: 2.5px;
	left: 6px;
	pointer-events: none;
`;
