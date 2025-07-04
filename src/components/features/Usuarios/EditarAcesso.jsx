import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Icon } from "./Styles";
import TextModal from "../TextModal/TextModal";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateUser } from "../../../hooks/usuarios";
import Toast from "react-native-toast-message";

export default function EditarAcesso({ id, acesso, nome }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });

      Toast.show({
        type: "success",
        text1: "Editado com sucesso",
      });
    },
    onError: () => {
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

    if (id)
      putUser({
        id,
        dados: {
          permissao: !acesso,
        },
      });
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <View>
      <TouchableOpacity onPress={showModal}>
        <Icon name='key' />
      </TouchableOpacity>

      <TextModal
        title={acesso ? `Remover Acesso` : `Conceder Acesso`}
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        buttonTitle='CONFIRMAR'
        text={`Tem certeza que deseja ${acesso ? "remover" : "conceder"} acesso de administrador?`}
      />
    </View>
  );
}
