import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Icon, Input } from "./Styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../Modal/Modal";
import Botao from "../../commons/Botao/Botao";
import { cargoValidationSchema } from "./utils";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateUser } from "../../../hooks/usuarios";
import Toast from "react-native-toast-message";

export default function EditarDados({ id, nome, cargo }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cargoValidationSchema),
    defaultValues: {
      cargo,
    },
  });

  const { mutate: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
      reset();
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
    reset({ cargo });
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
    reset();
  }

  function onSubmit(data) {
    handleCancel();

    if (data.cargo === cargo) return;

    putUser({ id, dados: data });
  }

  return (
    <View>
      <TouchableOpacity onPress={showModal}>
        <Icon name='edit' />
      </TouchableOpacity>

      <Modal
        title={`Editar cargo de ${nome}`}
        open={open}
        onCancel={handleCancel}
        footer={<Botao title='SALVAR' onPress={handleSubmit(onSubmit)} />}
      >
        <Input control={control} name='cargo' error={errors.cargo} placeholder='Novo Cargo' />
      </Modal>
    </View>
  );
}
