import React from 'react';

import { TextInput, ErrorText, Title } from './styles';

export const Input = ({
  keyRef,
  title,
  error,
  value,
  outline,
  secured,
  placeholder = '',
  paddingLeft = '',
  marginBot = '',
  onChangeText,
}) => (
  <>
    {title && <Title>{title}</Title>}
    {error && <ErrorText>{error}</ErrorText>}
    <TextInput
      value={value}
      onChangeText={(text) =>
        keyRef
          ? onChangeText((prevState) => ({ ...prevState, [keyRef]: text }))
          : onChangeText(text)
      }
      secureTextEntry={secured}
      placeholder={placeholder}
      outline={outline}
      paddingLeft={paddingLeft}
    />
  </>
);
