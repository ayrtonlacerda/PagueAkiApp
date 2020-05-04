/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import * as yup from 'yup';
// logic
import { useAuth } from '../../global';
// ui
import {
  Input,
  Button,
  ButtonTouchable,
  Container,
  Logo,
} from '../../components';
import { ButtonsView } from './styles';
import { useCommons, useValidation } from '../../hooks';

const schema = {
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
};

const Login = () => {
  const [err, validade] = useValidation(schema);
  const { fetchAuth, error, loading } = useAuth();
  const { navigation } = useCommons();
  const [forms, setForms] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!err) {
      fetchAuth(forms, 'postSignIn');
    }
  }, [err]);

  const handleLogin = useCallback(() => validade(forms), [forms]);

  const handleSignup = useCallback(() => navigation.navigate('Signup'), [
    navigation,
  ]);

  const handleForgotPass = useCallback(() => {}, []);

  return (
    <Container>
      <Logo big marBottom />
      <Error>{error}</Error>
      <Input
        keyRef="email"
        placeholder="Email"
        value={forms.user}
        onChangeText={setForms}
        error={err.email}
      />
      <Input
        keyRef="password"
        placeholder="******"
        secured
        value={forms.password}
        onChangeText={setForms}
        error={err.password}
      />
      <ButtonsView>
        <ButtonTouchable
          half
          text="CADASTRAR"
          handleOnPress={handleSignup}
          outline
          borderC
        />
        <Button half text="ENTRAR" handleOnPress={handleLogin} />
      </ButtonsView>
      <Button
        loading={loading}
        text="Esqueceu sua senha?"
        tbutton
        handleOnPress={handleForgotPass}
      />
    </Container>
  );
};

export default Login;
