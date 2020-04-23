import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Logo = styled.Image`
  width: 63%;
  height: 13%;
  background: #fff;
  align-self: center;
  margin-bottom: 30px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput`
  height: 48px;
  background: #eee;
  border-radius: 9px;
  padding: 0 20px;
  margin: 10px 0;
  margin-bottom: 10px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin-top: 5%;
`;

export const ButtonSignup = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: #77a93a;
  height: 40px;
  width: 125px;
`;

export const SignupButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #77a93a;
  font-weight: bold;
  text-align: center;
`;

export const ButtonLogin = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #77a93a;
  border-radius: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 40px;
  width: 125px;
`;

export const LoginButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const PasswordText = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: #77a93a;
  margin-top: 35%;
`;
