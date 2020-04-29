import React from 'react';

import { TextInput, ErrorText, Title } from './styles';

export const Input = ({
  key,
  title,
  error,
  value,
  outline,
  secured,
  placeholder = '',
  paddingLeft = '',
  onChangeText,
}) => (
  <>
    {title && <Title>{title}</Title>}
    {error && <ErrorText>{error}</ErrorText>}
    <TextInput
      value={value}
      onChangeText={(text) =>
        key
          ? onChangeText((prevState) => ({ ...prevState, [key]: text }))
          : onChangeText(text)
      }
      secureTextEntry={secured}
      placeholder={placeholder}
      outline={outline}
      paddingLeft={paddingLeft}
    />
  </>
);
