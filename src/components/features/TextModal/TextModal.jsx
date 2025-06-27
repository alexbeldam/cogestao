import Botao from '../../commons/Botao/Botao';
import Modal from '../Modal/Modal';
import { Texto } from './Styles';

export default function TextModal({ text, onOk, buttonTitle, ...rest }) {
	return (
		<Modal footer={<Botao title={buttonTitle} onPress={onOk} />} {...rest}>
			<Texto>{text}</Texto>
		</Modal>
	);
}
