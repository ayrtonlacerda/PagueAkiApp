/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';
// logic
import { useCommons, useValidation } from '../../hooks';
import { useAuth } from '../../global';
// ui
import { Input, Button, Logo, Avatar } from '../../components';
import { Container, ButtonsView } from './styles';

const cameraOptions = {
  title: 'Escolha uma das opções',
  cancelButtonTitle: 'Cancelar',
  takePhotoButtonTitle: 'Tirar uma foto',
  chooseFromLibraryButtonTitle: 'Escolher uma foto',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  mediaType: 'mixed',
};

const schema = {
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  phone: yup.string().required().min(11), // mascaras
};

function Signup() {
  const [err, validade] = useValidation(schema);
  const { fetchAuth } = useAuth();
  const { navigation } = useCommons();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!err) {
      fetchAuth(user, 'postSignUp');
    }
  }, [err]);

  const changeAvatar = useCallback(() => {
    ImagePicker.showImagePicker(cameraOptions, (res) => setImage(res));
  }, [image]);

  const handleSignUp = useCallback(() => validade(user), [user, err]);

  const handleCancel = useCallback(() => navigation.navigate('Login'), []);

  console.log({ err });
  return (
    <Container>
      <Logo />
      <Avatar
        handleOnPress={changeAvatar}
        source={image}
        photoIsSet={image && image.uri}
      />
      <Input
        keyRef="name"
        onChangeText={setUser}
        value={user.name}
        placeholder="Usuário Exemplo"
        title="Nome"
        outline
        error={err.name}
      />
      <Input
        keyRef="email"
        onChangeText={setUser}
        value={user.email}
        placeholder="exemplo@exemplo.com"
        title="Email"
        outline
        error={err.email}
      />
      <Input
        keyRef="phone"
        onChangeText={setUser}
        value={user.phone}
        placeholder="(61) 99999-8888"
        title="Celular"
        outline
        error={err.phone}
      />
      <Input
        keyRef="password"
        onChangeText={setUser}
        value={user.password}
        placeholder="Mínimo de 6 dígitos"
        title="Senha"
        outline
        error={err.password}
      />
      <ButtonsView>
        <Button text="ENTRAR" handleOnPress={handleSignUp} />
        <Button text="Cancelar" tbutton tcolor handleOnPress={handleCancel} />
      </ButtonsView>
    </Container>
  );
}

export default Signup;
