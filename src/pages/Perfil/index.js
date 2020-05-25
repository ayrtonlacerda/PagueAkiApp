import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Card, TitleNText } from '../../components';
import { Imgs } from '../../assets';
import { colors } from '../../styles';
import { useCommons, useFetch } from '../../hooks';
import Endpoints from '../../services';
import { useAuth } from '../../global';

import {
  Logout,
  AvatarView,
  ButtonChangeAvatar,
  ButtonChange,
  Avatar,
  InfosView,
  Line,
  Services,
  ServicesText,
  Scroll,
  IconExit,
  NoServiceText,
} from './styles';

const objTeste = [
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
  const { setDataAuth } = useAuth();
  const { navigation, isFocused } = useCommons();
  const [response, loading, error] = useFetch(
    Endpoints.getPerfil,
    '',
    isFocused
  );

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

  const handleLogout = useCallback(() => {
    AsyncStorage.clear();
    setDataAuth(null);
  }, []);

  const handlePress = useCallback(
    (product, logo) => navigation.navigate('ShowData', { product, logo }),
    [navigation]
  );

  // console.tron.log(response);

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
        <TitleNText title="E-mail" text="Teste" />
        <TitleNText title="Telefone" text="Teste" />
        <Line />
        <Services>
          <ServicesText>Serviços Ativos</ServicesText>
          <Scroll>
            {response &&
              response.drugstore === null &&
              response.truck === null && (
                <NoServiceText>
                  Nenhum serviço contratado até o momento
                </NoServiceText>
              )}
            {response && response.drugstore && (
              <Card
                cardText="Medicação"
                source={Imgs.LOGO_MEDICACAO}
                cardColor={colors.ORANGE}
                handleOnPress={() =>
                  handlePress(response.drugstore, 'Medicacao')
                }
              />
            )}
            {response && response.truck && (
              <Card
                cardText="Caminhão"
                source={Imgs.LOGO_CAMINHAO2}
                cardColor={colors.DARK}
                handleOnPress={() =>
                  handlePress(response.drugstore, 'Caminhao')
                }
              />
            )}
          </Scroll>
        </Services>
      </InfosView>
    </Container>
  );
}
