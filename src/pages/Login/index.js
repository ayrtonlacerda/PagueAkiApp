import React, { useState, useCallback } from 'react';
import { Input, Button } from '../../components';
import { useCommons } from '../../hooks';
import { Container, Logo, ButtonsView } from './styles';
import { Imgs } from '../../assets';

const Login = () => {
  const { navigation } = useCommons();
  const [forms, setForms] = useState({
    user: '',
    userPass: '',
  });

  const handleLogin = useCallback(() => {}, []);

  const handleSigup = useCallback(() => navigation.navigate('Signup'), [
    navigation,
  ]);

  const handleForgotPass = useCallback(() => {}, []);

  return (
    <Container>
      <Logo source={Imgs.LOGO_BRANCA} />
      <Input
        placeholder="Email ou senha"
        value={forms.user}
        onChangeText={(text) => setForms({ ...forms, user: text })}
      />
      <Input
        placeholder="Asdewq"
        secured
        value={forms.userPass}
        onChangeText={(text) => setForms({ ...forms, userPass: text })}
      />
      <ButtonsView>
        <Button half text="CADASTRAR" handleOnPress={handleSigup} outline />
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
