import React, { useState, useCallback } from 'react';
import { Input, Button, ButtonTouchable } from '../../components';
import { useCommons } from '../../hooks';
import { Container, Logo, ButtonsView } from './styles';
import { Imgs } from '../../assets';

const Login = () => {
  const { navigation } = useCommons();
  const [forms, setForms] = useState({
    user: '',
    userPass: '',
  });

  const handleLogin = useCallback(() => navigation.navigate('Home'), [
    navigation,
  ]);

  const handleSignup = useCallback(() => navigation.navigate('Signup'), [
    navigation,
  ]);

  const handleForgotPass = useCallback(() => { }, []);

  return (
    <Container>
      <Logo source={Imgs.LOGO_BRANCA} />
      <Input
        placeholder="Email ou telefone"
        value={forms.user}
        onChangeText={(text) => setForms({ ...forms, user: text })}
      />
      <Input
        placeholder="******"
        secured
        value={forms.userPass}
        onChangeText={(text) => setForms({ ...forms, userPass: text })}
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
        text="Esqueceu sua senha?"
        tbutton
        handleOnPress={handleForgotPass}
      />
    </Container>
  );
};

export default Login;
