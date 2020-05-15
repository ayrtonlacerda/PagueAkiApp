import React, { useCallback } from 'react';
import { Container, Button } from '../../components';
import { CheckImage, Title, Description, TextButton } from './styles';
import { Imgs } from '../../assets';
import { useCommons } from '../../hooks';

const Finish = () => {
  const { navigation } = useCommons();

  const handleDownloadTerm = useCallback(() => navigation.navigate('Home'), []);

  const handleNext = useCallback(() => navigation.navigate('Home'), []);

  return (
    <Container>
      <CheckImage source={Imgs.CHECK} />
      <Title>Falta pouco...</Title>
      <Description>
        Baixe o termo de adesão e assine ao final tire uma foto e envie. Você
        podera fazer isso na pagina do seu perfil.
      </Description>
      <Button text="BAIXAR TERMO DE ADEÃO" onPress={handleDownloadTerm} />
      <TextButton onPress={handleNext}>BAIXAR DEPOIS</TextButton>
    </Container>
  );
};

export default Finish;
