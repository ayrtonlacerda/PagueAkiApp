import React, { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Card, TitleNText } from '../../components';
import { Imgs } from '../../assets';
import { colors } from '../../styles';
import { useCommons } from '../../hooks';

import {
  Logout,
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
  IconExit,
  ViewTeste,
} from './styles';

const objTeste = [
  {
    product: 'PagueAki',
    color: '#77A93A',
    logo: Imgs.LOGO_BRANCA2,
    status: 'Active',
    data: {
      name: 'Teste',
      cpf: '123',
      rg: '321',
      uf: 'DF',
      phone1: '890',
      phone2: '098',
      email: 'teste email',
    },
  },
  {
    product: 'Medicação',
    color: '#CD9400',
    logo: Imgs.LOGO_MEDICACAO,
    status: 'Await',
    data: {
      name: 'Teste',
      cpf: '123',
      rg: '321',
      uf: 'DF',
      phone1: '890',
      phone2: '098',
      email: 'teste email',
    },
  },
  {
    product: 'Caminhão',
    color: '#5B5B5B',
    logo: Imgs.LOGO_CAMINHAO2,
    status: 'Canceled',
    data: {
      name: 'Teste',
      cpf: '123',
      rg: '321',
      uf: 'DF',
      phone1: '890',
      phone2: '098',
      email: 'teste email',
    },
  },
];

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

export default function Perfil() {
  const { navigation } = useCommons();
  const [fileUri, setFileUri] = useState('');

  function changeAvatar() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFileUri(response.uri);
      }
    });
  }

  const handleLogout = useCallback(() => navigation.navigate('Login'), []);

  const handlePress = useCallback(
    (product) => navigation.navigate('ShowData', { product }),
    [navigation]
  );

  return (
    <Container noCenter>
      <Logout onPress={handleLogout}>
        <IconExit />
      </Logout>
      <AvatarView>
        <ButtonChangeAvatar onPress={changeAvatar} photoIsSet={fileUri}>
          {fileUri ? (
            <Avatar
              handleOnPress={changeAvatar}
              source={{ uri: fileUri }}
              photoIsSet={fileUri}
            />
          ) : null}
        </ButtonChangeAvatar>
        <ButtonChange>
          <Icon name="edit" size={18} color="white" />
        </ButtonChange>
      </AvatarView>
      <InfosView>
        <TitleNText title="E-mail" text="email@teste.com" />
        <TitleNText title="Telefone" text="(99)98888-8888" />
        <Line />
        <Services>
          <ServicesText>Serviços Ativos</ServicesText>
          <Scroll>
            {objTeste.map((data) => (
              <Card
                cardText={data.product}
                source={data.logo}
                cardColor={data.color}
                handleOnPress={() => handlePress(data)}
              />
            ))}
          </Scroll>
        </Services>
      </InfosView>
    </Container>
  );
}
