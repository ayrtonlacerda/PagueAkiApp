import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
  background: #f9f9f9;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  border-bottom-width: 1px;
  border-color: #fff;
  padding: 5px;
  margin-bottom: 50%;
`;

export const Logo = styled.Image`
  width: 73%;
  height: 13%;
  background: #fff;
  align-self: center;
  margin-bottom: 8px;
`;

export const AvatarView = styled.View`
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const ButtonChangeAvatar = styled.TouchableOpacity`
  width: 35%;
  height: ${(props) => (props.photoIsSet ? '105%' : '95%')};
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

export const FormInput = styled.View``;

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
  margin-bottom: 10%;
`;

export const ButtonSignup = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #77a93a;
  border-radius: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 40px;
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
