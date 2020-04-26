import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import InputText from '../../components/input';

import {
  Container,
  Input,
  InputPass,
  ErrorText,
  Logo,
  Form,
  ButtonsView,
  ButtonSignup,
  SignupButtonText,
  ButtonLogin,
  LoginButtonText,
  ForgotPassword,
  PasswordText,
} from './styles';

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState({
    user: '',
    userPass: '',
  });
  const [passCheck, setPassCheck] = useState(true);

  const handleLogin = () => {
    console.tron.log(forms);

    navigation.navigate('Home');
  };

  function checkPassLength(text) {
    const checkUserPassLength = text.length;

    if (checkUserPassLength <= 5) {
      setPassCheck({ passCheck: false });
    } else {
      setPassCheck({ passCheck: true });
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/images/LogoBranca.png')} />
      <Form>
        <Input
          value={forms.user}
          onChangeText={(text) =>
            setForms((prevState) => ({
              ...prevState,
              user: text,
            }))
          }
          placeholder="E-mail ou telefone"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <InputText
          placeholder="Asdewq"
          secured
          value={forms.userPass}
          onChangeText={(text) =>
            setForms((prevState) => ({
              ...prevState,
              userPass: text,
            }))
          }
          error
        />
        <ButtonsView>
          <ButtonSignup onPress={() => navigation.navigate('Signup')}>
            <SignupButtonText>CADASTRAR</SignupButtonText>
          </ButtonSignup>
          <ButtonLogin loading={loading} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <LoginButtonText>ENTRAR</LoginButtonText>
              )}
          </ButtonLogin>
        </ButtonsView>
      </Form>
      <ForgotPassword>
        <PasswordText>Esqueceu sua senha?</PasswordText>
      </ForgotPassword>
    </Container>
  );
}

export default Login;
