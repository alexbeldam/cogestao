import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon } from './Styles';
import TextModal from '../TextModal/TextModal';

export default function EditarAcesso({ id, acesso, nome }) {
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
				<Icon name="key" />
			</TouchableOpacity>

			<TextModal
				title={acesso ? `Remover Acesso` : `Conceder Acesso`}
				open={open}
				onCancel={handleCancel}
				onOk={handleOk}
				buttonTitle="CONFIRMAR"
				text={`Tem certeza que deseja ${
					acesso ? 'remover' : 'conceder'
				} acesso de administrador?`}
			/>
		</View>
	);
}
