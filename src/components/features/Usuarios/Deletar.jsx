import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon } from './Styles';
import TextModal from '../TextModal/TextModal';

export default function Deletar({ id, nome }) {
	const [open, setOpen] = useState(false);

	function showModal() {
		setOpen(true);
	}

	function handleOk() {
		setOpen(false);
	}

	function handleCancel() {
		setOpen(false);
	}

	return (
		<View>
			<TouchableOpacity onPress={showModal}>
				<Icon name="trash" />
			</TouchableOpacity>

			<TextModal
				title="Excluir Usuário"
				open={open}
				onCancel={handleCancel}
				onOk={handleOk}
				buttonTitle="EXCLUIR"
				text={`Tem certeza que deseja excluir ${nome}?`}
			/>
		</View>
	);
}
