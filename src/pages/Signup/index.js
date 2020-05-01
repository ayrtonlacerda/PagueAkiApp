import React, { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button, Logo } from '../../components';

import {
  Container,
  AvatarView,
  ButtonChangeAvatar,
  Avatar,
  AvatarText,
  FormInput,
  ButtonsView,
} from './styles';

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

function Signup({ navigation }) {
  // const [filePath, setFilePath] = useState({ data: '', uri: '' });
  const [user, setUser] = useState({ name: '', email: '', tel: '', pass: '' });
  const [fileUri, setFileUri] = useState('');

  const changeAvatar = () => {
    ImagePicker.showImagePicker(cameraOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFileUri(response.uri);
      }
    });
  };

  const handleSignUp = useCallback(() => navigation.navigate('Login'), [
    navigation,
  ]);

  const handleCancel = useCallback(() => navigation.navigate('Login'), [
    navigation,
  ]);

  return (
    <Container>
      <Logo />
      <AvatarView>
        <ButtonChangeAvatar onPress={changeAvatar} photoIsSet={fileUri}>
          {fileUri ? (
            <Avatar source={{ uri: fileUri }} style={{ resizeMode: 'cover' }} />
          ) : (
              <>
                <Icon name="photo-camera" size={25} />
                <AvatarText>Escolher foto</AvatarText>
              </>
            )}
        </ButtonChangeAvatar>
      </AvatarView>
      <Input
        value={user.name}
        onChangeText={(text) => setUser(text)}
        placeholder="Usuário Exemplo"
        title="Nome"
        outline
      />
      <Input
        value={user.email}
        onChangeText={(text) => setUser(text)}
        placeholder="exemplo@exemplo.com"
        title="Email"
        outline
      />
      <Input
        value={user.tel}
        onChangeText={(text) => setUser(text)}
        placeholder="(61) 99999-8888"
        title="Celular"
        outline
      />
      <Input
        value={user.pass}
        onChangeText={(text) => setUser(text)}
        placeholder="Mínimo de 6 dígitos"
        title="Senha"
        outline
      />
      <Input
        value={user.pass}
        onChangeText={(text) => setUser(text)}
        placeholder="******"
        title="Repetir Senha"
        outline
        marginBot
      />
      <ButtonsView>
        <Button text="ENTRAR" handleOnPress={handleSignUp} />
        <Button text="Cancelar" tbutton tcolor handleOnPress={handleCancel} />
      </ButtonsView>
    </Container>
  );
}

export default Signup;
