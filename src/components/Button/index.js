import React from 'react';
import { Container, Text, TextButton, Loading } from './styles';

export const Button = ({
  half,
  text,
  outline,
  tbutton,
  loading,
  handleOnPress,
}) =>
  !tbutton ? (
    <Container outline={outline} half={half} onPress={handleOnPress}>
      {loading ? (
        <Loading loading={loading} outline={outline} />
      ) : (
        <Text outline={outline}>{text}</Text>
      )}
    </Container>
  ) : (
    <TextButton onPress={handleOnPress}>{text}</TextButton>
  );
