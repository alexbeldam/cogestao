import { View } from "react-native";
import Campo from "../../commons/Campo/Campo";
import { Olho, Icon } from "./Styles";
import { useState } from "react";

export default function Senha(props) {
  const [hide, setHide] = useState(true);

  function toggleHide() {
    setHide(!hide);
  }

  return (
    <View>
      <Campo
        {...props}
        secureTextEntry={hide}
        textContentType='password'
        autoComplete='password'
        autoCapitalize='none'
        importantForAutofill='yes'
        accessibilityLabel='Password'
      />
      <Olho onPress={toggleHide}>
        <Icon name={`eye${!hide ? "-off" : ""}`} />
      </Olho>
    </View>
  );
}
