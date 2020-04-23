import * as yup from 'yup';
import React, { useState, Component } from 'react';
import { ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  Container,
  Input,
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
  const [user, setUser] = useState('');
  const [userPass, setPass] = useState('');

  function handleLogin() {
    navigation.navigate('Signup');
  }

  return (
    <Container>
      <Logo source={require('../../assets/images/LogoBranca.png')} />
      <Form>
        <Input
          value={user}
          onChangeText={(text) => setUser(text)}
          placeholder="E-mail ou telefone"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          value={userPass}
          onChangeText={(text) => setPass(text)}
          placeholder="Senha"
          onSubmitEditing={handleLogin}
          secureTextEntry
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
