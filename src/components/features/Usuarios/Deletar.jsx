import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Icon } from "./Styles";
import TextModal from "../TextModal/TextModal";
import Toast from "react-native-toast-message";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUser } from "../../../hooks/usuarios";

export default function Deletar({ id, nome }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending } = useDeleteUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });

      Toast.show({
        type: "success",
        text1: "Deletado com sucesso",
      });
    },
    onError: (err) => {
      const { data } = err.response;

      if (err.status != 403)
        Toast.show({
          type: "error",
          text1: data.message,
        });
    },
  });

  function showModal() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);

    if (id) deleteUser(id);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <View>
      <TouchableOpacity onPress={showModal}>
        <Icon name='trash' />
      </TouchableOpacity>

      <TextModal
        title='Excluir Usuário'
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        buttonTitle='EXCLUIR'
        text={`Tem certeza que deseja excluir ${nome}?`}
      />
    </View>
  );
}
