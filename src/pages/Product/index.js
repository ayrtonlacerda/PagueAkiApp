import React, { useCallback } from 'react';
import { useCommons } from '../../hooks';
import { Container, Button } from '../../components';
import {
  OnBoardView,
  Scroll,
  ProductImage,
  ProductTitle,
  ProductTextView,
  Point,
  ProductText,
} from './styles';
import { colors, metrics } from '../../styles';

export default function Product() {
  const { navigation, route } = useCommons();

  const { product } = route.params;

  const handleConfirm = useCallback(
    () => navigation.navigate('Forms', { typeForm: product.value }),
    []
  );

  return (
    <Container background={product.color}>
      <ProductImage source={product.logo} />
      <ProductTitle>{product.texto}</ProductTitle>
      <OnBoardView>
        {product.infos.map((page) => (
          <Scroll>
            {page.map((data) => (
              <ProductTextView>
                <Point />
                <ProductText multiline>{data}</ProductText>
              </ProductTextView>
            ))}
          </Scroll>
        ))}
      </OnBoardView>
      <Button
        color={colors.DARK}
        margin={metrics.MEDIUM}
        text={product.value === 'PAGUEAKI' ? 'CONTACTAR' : 'CONTRATAR'}
        handleOnPress={handleConfirm}
      />
    </Container>
  );
}
