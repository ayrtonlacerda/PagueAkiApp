import React, { useCallback, useState } from 'react';
import { useCommons } from '../../hooks';
import { useAuth } from '../../global';
import { Container, Button } from '../../components';
import {
  OnBoardView,
  Scroll,
  ProductImage,
  ProductTitle,
  ProductTextView,
  Point,
  ProductText,
  ViewBall,
  Ball,
} from './styles';
import { colors, metrics } from '../../styles';

export default function Product() {
  const { data } = useAuth();
  const { navigation, route } = useCommons();
  const [indexPage, setIndexPage] = useState(0);

  const { product } = route.params;

  const handleConfirm = useCallback(() => {
    if (data) {
      navigation.navigate('Forms', { typeForm: product.value });
    } else {
      navigation.navigate('Login');
    }
  }, []);

  const handleScroll = (event) => {
    console.log({ event: event.nativeEvent.contentOffset });
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = offsetX / (metrics.SCREEN_WIDTH - 2 * metrics.XBIG - 1);
    setIndexPage(index);
  };

  return (
    <Container background={product.color}>
      <ProductImage source={product.logo} />
      <ProductTitle>{product.texto}</ProductTitle>
      <OnBoardView onScroll={handleScroll}>
        {product.infos.map((page) => (
          <Scroll>
            {page.map((data, index) => {
              return (
                <ProductTextView>
                  <Point />
                  <ProductText multiline>{data}</ProductText>
                </ProductTextView>
              );
            })}
          </Scroll>
        ))}
      </OnBoardView>
      <ViewBall>
        {product.infos.map((_, index) => (
          <Ball
            filled={index <= indexPage}
            noMargin={product.infos.length <= indexPage + 1}
          />
        ))}
      </ViewBall>
      {product.infos.length <= indexPage + 1 && (
        <Button
          color={colors.DARK}
          margin={metrics.MEDIUM}
          text={product.value === 'PAGUEAKI' ? 'CONTACTAR' : 'CONTRATAR'}
          handleOnPress={handleConfirm}
        />
      )}
    </Container>
  );
}
