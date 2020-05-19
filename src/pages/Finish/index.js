import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { Container, Button } from '../../components';
import { CheckImage, Title, Description, TextButton } from './styles';
import { Imgs } from '../../assets';
import { useCommons } from '../../hooks';

const urlsDownloads = {
  CAMINHAO: 'http://138.197.13.119:3333/download/caminhao',
  MEDICACAO: 'http://138.197.13.119:3333/download/farmacia',
};

const Finish = () => {
  const { navigation, route } = useCommons();
  const { typeForm } = route.params; // tipo do form pra busca o schema

  const handleDownloadTerm = useCallback(async () => {
    const supported = await Linking.canOpenURL(urlsDownloads[typeForm]);
    if (supported) {
      await Linking.openURL(urlsDownloads[typeForm]);
    }
    navigation.navigate('Home');
  }, [typeForm, navigation]);

  const handleNext = useCallback(() => navigation.navigate('Home'), []);

  return (
    <Container>
      <CheckImage source={Imgs.CHECK} />
      <Title>Falta pouco...</Title>
      <Description>
        Baixe o termo de adesão e assine ao final tire uma foto e envie. Você
        podera fazer isso na pagina do seu perfil.
      </Description>
      <Button text="BAIXAR TERMO DE ADEÃO" handleOnPress={handleDownloadTerm} />
      <TextButton onPress={handleNext}>BAIXAR DEPOIS</TextButton>
    </Container>
  );
};

export default Finish;
/* GET /download/caminhao

GET /download/farmacia */
