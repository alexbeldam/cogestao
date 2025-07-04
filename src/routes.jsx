import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "./pages";
import { colors } from "./styles/styleVariables";
import useAuthStore from "./stores/auth";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Stack.Navigator>
      {usuario?.permissao ? (
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: colors.yellow,
            },
            headerTintColor: colors.black,
            headerTitle: "GERENCIAR USUÁRIOS",
            headerTitleStyle: {
              fontSize: "25",
            },
          }}
        />
      ) : (
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: colors.yellow,
            },
            headerTitle: "",
          }}
        />
      )}
    </Stack.Navigator>
  );
}
