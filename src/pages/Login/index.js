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
import { ButtonsView, Error } from './styles';
import { useCommons, useValidation, useLazyFetch } from '../../hooks';
import Endpoints, { api } from '../../services';

const schema = {
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
};

const Login = () => {
  const [errorValidade, validade] = useValidation(schema);
  const { data, setDataAuth } = useAuth();
  const { navigation } = useCommons();
  const [forms, setForms] = useState({
    email: '',
    password: '',
  });

  const [fetch, { error, response, loading }] = useLazyFetch(
    Endpoints.postSignIn,
    forms
  );

  const handleFetchSuccess = useCallback(() => {
    console.log({ response });
    setDataAuth(response.data);
  }, [response]);

  useEffect(() => {
    if (!errorValidade && !response) {
      fetch();
    }
    if (response) {
      handleFetchSuccess();
    }
  }, [response, errorValidade]);

  const handleLogin = useCallback(() => validade(forms), [
    forms,
    navigation,
    errorValidade,
  ]);

  const handleSignup = useCallback(() => navigation.navigate('Signup'), [
    navigation,
  ]);

  const handleForgotPass = useCallback(() => {}, []);

  console.log({ errorValidade, loading, error });
  return (
    <Container>
      <Logo big marBottom />
      <Error>{error && error.response.data?.message}</Error>
      <Input
        keyRef="email"
        placeholder="Email"
        value={forms.user}
        onChangeText={setForms}
        error={errorValidade.email}
      />
      <Input
        keyRef="password"
        placeholder="******"
        secured
        value={forms.password}
        onChangeText={setForms}
        error={errorValidade.password}
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
