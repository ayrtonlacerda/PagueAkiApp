import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Card } from '../../components';
import { Imgs } from '../../assets';
import { colors } from '../../styles';

import {
  Logout,
  LogoutText,
  AvatarView,
  ButtonChangeAvatar,
  ButtonChange,
  Avatar,
  InfosView,
  TitleText,
  UserText,
  Line,
  Services,
  ServicesText,
  Scroll,
} from './styles';

const objTeste = [
  {
    texto: 'Título Teste',
  },
  {
    texto: 'Título Teste 2',
  },
  {
    texto: 'Título Teste 3',
  },
];

export default function Perfil() {
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

  return (
    <Container noCenter>
      <Logout>
        <LogoutText>SAIR</LogoutText>
      </Logout>
      <AvatarView>
        <ButtonChangeAvatar onPress={changeAvatar} photoIsSet={fileUri}>
          {fileUri ? (
            <Avatar source={{ uri: fileUri }} style={{ resizeMode: 'cover' }} />
          ) : null}
        </ButtonChangeAvatar>
        <ButtonChange>
          <Icon name="edit" size={18} color="white" />
        </ButtonChange>
      </AvatarView>
      <InfosView>
        <TitleText>E-mail</TitleText>
        <UserText>email@teste.com</UserText>
        <TitleText>Telefone</TitleText>
        <UserText>(99)98888-8888</UserText>
        <Line />
        <Services>
          <ServicesText>Serviços Ativos</ServicesText>
          <Scroll>
            {objTeste.map((data) => (
              <Card cardText={data.texto} source={Imgs.LOGO_BRANCA} />
            ))}
            <Card
              cardText="Teste"
              cardColor={colors.ORANGE}
              source={Imgs.LOGO_BRANCA}
            />
          </Scroll>
        </Services>
      </InfosView>
    </Container>
  );
}

/*  */
