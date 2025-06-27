import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../styles/styleVariables';

export const Backdrop = styled.View`
	flex: 1;
	background-color: ${colors.dim};
	justify-content: center;
	align-items: center;
`;

export const Body = styled.View`
	background-color: ${colors.white};
	padding: 24px;
	border-radius: 12px;
	max-width: 80%;
	z-index: 10000;
`;

export const Header = styled.View`
	position: relative;
	padding-top: 32px;
	margin-bottom: 20px;
`;

export const Main = styled.View`
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	font-weight: bold;
	text-align: center;
	font-size: 30px;
	color: ${colors.black};
`;

export const Cancel = styled.TouchableOpacity`
	position: absolute;
	top: 0px;
	right: 0px;
	font-weight: bold;
	color: ${colors.black};
`;

export const Icon = styled(Feather)`
	font-size: 35px;
	color: ${colors.black};
`;
