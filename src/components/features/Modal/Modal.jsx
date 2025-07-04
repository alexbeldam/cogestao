import { Modal, View } from "react-native";
import { Backdrop, Body, Header, Main, Title, Cancel, Icon } from "./Styles";

export default function ModalContainer(props) {
  const { open, title, onCancel, footer, children, ...rest } = props;

  if (!open) return null;

  return (
    <Modal {...rest} visible={open} transparent animationType='slide'>
      <Backdrop>
        <Body>
          <Header>
            <Title>{title}</Title>
            <Cancel onPress={onCancel}>
              <Icon name='x' />
            </Cancel>
          </Header>
          <Main>{children}</Main>
          <View>{footer}</View>
        </Body>
      </Backdrop>
    </Modal>
  );
}
