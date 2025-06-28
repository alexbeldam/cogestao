import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon, Input } from './Styles';
import Modal from '../Modal/Modal';
import Botao from '../../commons/Botao/Botao';

export default function EditarDados({ id, nome, cargo }) {
	const [open, setOpen] = useState(false);
	const [novoCargo, setCargo] = useState(cargo);

	function showModal() {
		setOpen(true);
	}

	function handleOk() {
		setOpen(false);
	}

	function handleCancel() {
		setCargo(cargo);

		setOpen(false);
	}

	return (
		<View>
			<TouchableOpacity onPress={showModal}>
				<Icon name="edit" />
			</TouchableOpacity>

			<Modal
				title={`Editar cargo de ${nome}`}
				open={open}
				onCancel={handleCancel}
				footer={<Botao title="SALVAR" onPress={handleOk} />}
			>
				<Input
					placeholder="Novo Cargo"
					value={novoCargo}
					onChangeText={setCargo}
				/>
			</Modal>
		</View>
	);
}
