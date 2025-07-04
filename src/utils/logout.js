import useAuthStore from "../stores/auth";
import Toast from "react-native-toast-message";

export function logout(message) {
  useAuthStore.getState().clearAuth();
  if (message)
    Toast.show({
      type: "error",
      text1: message,
    });
}
