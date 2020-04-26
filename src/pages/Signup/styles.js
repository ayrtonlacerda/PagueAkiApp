import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
  },
})`
  flex: 1;
  background: #f9f9f9;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px;
  background: #000;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 75px;
  background: #fff;
  align-self: center;
  margin-bottom: 8px;
`;

export const AvatarView = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonChangeAvatar = styled.TouchableOpacity`
  width: 100px;
  height: ${(props) => (props.photoIsSet ? '100px' : '100px')};
  margin-top: ${(props) => (props.photoIsSet ? '5px' : 0)};
  border-radius: 200px;
  border-width: 3px;
  border-color: #77a93a;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  elevation: 10;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

export const AvatarText = styled.Text`
  font-weight: bold;
  font-size: 13.5px;
`;

export const FormInput = styled.View`
  width: 90%;
`;

export const TextInstruction = styled.Text`
  color: rgba(0, 0, 0, 0.55);
  margin-top: 5px;
  padding-left: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
})`
  height: 45px;
  background: #F7F7F7
  border-radius: 10px;
  border-width: 1px;
  border-color: #CDCDCD;
  padding: 0 18px;
  margin: 4px 0;
  margin-bottom: 12px;
`;

export const ButtonsView = styled.View`
  padding-bottom: 30px;
`;

export const ButtonSignup = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #77a93a;
  border-radius: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 40px;
  width: 90%;
  margin-bottom: 5%;
`;

export const SignupButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ButtonCancel = styled.TouchableOpacity``;

export const CancelText = styled.Text`
  text-decoration: underline;
  align-self: center;
  color: rgba(0, 0, 0, 0.6);
  margin: 5%;
`;
