import React, { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCommons } from '../../hooks';
import { Container } from '../../components';

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
  ServiceCard,
  ServiceCardImage,
  ServiceCardText,
  IconExit,
} from './styles';

export default function Perfil() {
  const { navigation } = useCommons();
  const [fileUri, setFileUri] = useState('');

  const changeAvatar = () => {
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
  };

  const handleLogout = useCallback(() => navigation.navigate('Login'), []);

  const green = '77A93A';
  const grey = 'CDCDCD';
  const darkGrey = '5B5B5B';

  return (
    <Container noCenter>
      <Logout onPress={handleLogout}>
        <IconExit />
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
          <ServiceCard cardColor={green}>
            <ServiceCardText>What is Lorem Ipsum</ServiceCardText>
            <ServiceCardImage
              source={require('../../assets/images/LogoBranca.png')}
            />
          </ServiceCard>
          <ServiceCard cardColor={grey}>
            <ServiceCardText>What is Lorem Ipsum</ServiceCardText>
            <ServiceCardImage
              source={require('../../assets/images/LogoBranca.png')}
            />
          </ServiceCard>
          <ServiceCard cardColor={darkGrey}>
            <ServiceCardText>What is Lorem Ipsum</ServiceCardText>
            <ServiceCardImage
              source={require('../../assets/images/LogoBranca.png')}
            />
          </ServiceCard>
        </Services>
      </InfosView>
    </Container>
  );
}
