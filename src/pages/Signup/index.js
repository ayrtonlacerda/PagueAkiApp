import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  AvatarView,
  ButtonChangeAvatar,
  Avatar,
  AvatarText,
  Form,
  FormInput,
  TextInstruction,
  Input,
  ButtonsView,
  ButtonSignup,
  SignupButtonText,
  ButtonCancel,
  CancelText,
} from './styles';

function Signup({ navigation }) {
  const [filePath, setFilePath] = useState({ data: '', uri: '' });
  const [user, setUser] = useState({ name: '', email: '', tel: '', pass: '' });
  const [fileUri, setFileUri] = useState('');

  function changeAvatar() {
    const options = {
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
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));
        // console.tron.log(JSON.stringify(response));
        /* this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        }); */

        setFileUri(response.uri);
      }
    });
  }

  function handleSignUp() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Logo source={require('../../assets/images/LogoBranca.png')} />
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
      <FormInput>
        <TextInstruction>Nome</TextInstruction>
        <Input
          value={user.name}
          onChangeText={(text) => setUser(text)}
          placeholder="Usuário Exemplo"
        />
      </FormInput>
      <FormInput>
        <TextInstruction>E-mail</TextInstruction>
        <Input
          value={user.email}
          onChangeText={(text) => setUser(text)}
          placeholder="exemplo@exemplo.com"
        />
      </FormInput>
      <FormInput>
        <TextInstruction>Celular</TextInstruction>
        <Input
          value={user.tel}
          onChangeText={(text) => setUser(text)}
          placeholder="(61) 99999-8888"
        />
      </FormInput>
      <FormInput>
        <TextInstruction>Senha</TextInstruction>
        <Input
          value={user.pass}
          onChangeText={(text) => setUser(text)}
          placeholder="Mínimo de 6 dígitos"
        />
      </FormInput>
      <FormInput>
        <TextInstruction>Repetir Senha</TextInstruction>
        <Input
          value={user.pass}
          onChangeText={(text) => setUser(text)}
          placeholder="******"
        />
      </FormInput>
      <FormInput>
        <TextInstruction>E-mail</TextInstruction>
        <Input
          value={user.pass}
          onChangeText={(text) => setUser(text)}
          placeholder="exemplo@exemplo.com"
        />
      </FormInput>
      <ButtonsView>
        <ButtonSignup onPress={handleSignUp}>
          <SignupButtonText>REGISTRAR</SignupButtonText>
        </ButtonSignup>
        <ButtonCancel onPress={handleSignUp}>
          <CancelText>Cancelar</CancelText>
        </ButtonCancel>
      </ButtonsView>
    </Container>
  );
}

export default Signup;

/*
<FormInput>
          <TextInstruction>Nome</TextInstruction>
          <Input
            value={user.name}
            onChangeText={(text) =>
              setUser((prevState) => ({
                ...prevState,
                name: text,
              }))
            }
            placeholder="Usuário Exemplo"
          />
        </FormInput>
        <FormInput>
          <TextInstruction>E-mail</TextInstruction>
          <Input
            value={user.pass}
            onChangeText={(text) => setUser(text)}
            placeholder="exemplo@exemplo.com"
          />
        </FormInput>
        <FormInput>
          <TextInstruction>Telefone</TextInstruction>
          <Input
            value={user.pass}
            onChangeText={(text) => setUser(text)}
            placeholder="(61) XXXXX-XXXX"
          />
        </FormInput>
        <FormInput>
          <TextInstruction>Senha</TextInstruction>
          <Input
            value={user.pass}
            onChangeText={(text) => setUser(text)}
            placeholder="Mínimo de 6 digitos"
            secureTextEntry
          />
        </FormInput>
        <FormInput>
          <TextInstruction>Repetir Senha</TextInstruction>
          <Input
            value={user.pass}
            onChangeText={(text) => setUser(text)}
            placeholder="Senha"
            secureTextEntry
          />
        </FormInput> */
