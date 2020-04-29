import React from 'react';
import { Container, Text, TextButton, Loading } from './styles';

export const Button = ({
  half,
  text,
  outline,
  tbutton,
  tcolor,
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
      <TextButton tcolor={tcolor} onPress={handleOnPress}>
        {text}
      </TextButton>
    );
