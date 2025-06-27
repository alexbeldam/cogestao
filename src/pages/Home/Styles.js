import styled from 'styled-components/native';
import { colors } from '../../styles/styleVariables';

export const Container = styled.View`
	flex: 1;
	background-color: ${colors.black};
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const Title = styled.Text`
	font-size: 30px;
	color: ${colors.yellow};
`;
