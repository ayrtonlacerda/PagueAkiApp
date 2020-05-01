import React from 'react';
import { Container, Text } from './styles';

export const ButtonTouchable = ({ half, text, outline, handleOnPress }) => (
  <Container outline={outline} half={half} onPress={handleOnPress}>
    <Text outline={outline}>{text}</Text>
  </Container>
);
