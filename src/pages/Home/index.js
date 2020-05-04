import React, { useCallback } from 'react';
import { Container, Logo, Card } from '../../components';
import { useCommons } from '../../hooks';
import { Imgs } from '../../assets';
import { colors } from '../../styles';

import { Scroll } from './styles';

const objTeste = [
  {
    texto: 'Título Teste',
    descricao:
      'There are many variations of passages of Lorem Ipsum available, but the majority believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidde',
  },
  {
    texto: 'Título Teste 2',
    descricao:
      'There are many variations of passages of Lorem Ipsum available, but the majority believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidde',
  },
];

const Text1 = 'What is Lorem Ipsum';
const TextDescription =
  'There are many variations of passages of Lorem Ipsum available, but the majority believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidde';

export default function Home() {
  const { navigation } = useCommons();
  const handleProduct = useCallback(() => navigation.navigate('Product'), [
    navigation,
  ]);

  return (
    <Container>
      <Logo />
      <Scroll>
        {objTeste.map((data) => (
          <Card
            big
            source={Imgs.LOGO_BRANCA}
            titleText={data.texto}
            descriptionText={data.descricao}
            handleOnPress={handleProduct}
          />
        ))}
        <Card
          big
          cardColor={colors.GREY}
          source={Imgs.LOGO_BRANCA}
          titleText={Text1}
          descriptionText={TextDescription}
        />
        <Card
          big
          cardColor={colors.DARK}
          source={Imgs.LOGO_BRANCA}
          titleText={Text1}
          descriptionText={TextDescription}
        />
        <Card
          big
          cardColor={colors.ORANGE}
          source={Imgs.LOGO_BRANCA}
          titleText={Text1}
          descriptionText={TextDescription}
        />
      </Scroll>
    </Container>
  );
}
