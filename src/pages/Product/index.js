import React from 'react';
import { Container, Button } from '../../components';
import {
  Scroll,
  ProductImage,
  ProductTitle,
  ProductTextView,
  Point,
  ProductText,
} from './styles';
import { Imgs } from '../../assets';
import { colors, metrics } from '../../styles';

const objTeste = [
  {
    texto:
      'There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden',
  },
  {
    texto:
      'There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden. There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden',
  },
  {
    texto:
      'There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden',
  },
  {
    texto:
      'There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden. There are many variations of passages of Lorem Ipsum availablee but the majority believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden',
  },
];

export default function Product() {
  return (
    <Container background={colors.PRIMARY}>
      <ProductImage source={Imgs.LOGO_BRANCA} />
      <ProductTitle>Nome Do Produto</ProductTitle>
      <Scroll>
        {objTeste.map((data) => (
          <ProductTextView>
            <Point />
            <ProductText multiline>{data.texto}</ProductText>
          </ProductTextView>
        ))}
      </Scroll>
      <Button color={colors.DARK} margin={metrics.MEDIUM} text="CONTRATAR" />
    </Container>
  );
}
