import React, { useState } from 'react';
import { Input, Button } from '../../components';

import { Container, Logo, ButtonsView } from './styles';

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState({
    user: '',
    userPass: '',
  });
  const [passCheck, setPassCheck] = useState(true);

  const handleLogin = () => {
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
        <Button
          half
          text="CADASTRAR"
          handleOnPress={() => {}}
          outline
          loading={loading}
        />
        <Button half text="ENTRAR" handleOnPress={() => {}} loading={loading} />
      </ButtonsView>
      <Button text="Esqueceu sua senha?" tbutton />
    </Container>
  );
}

export default Login;
