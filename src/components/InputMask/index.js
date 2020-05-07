import React from 'react';

import { TextInput, ErrorText, Title } from './styles';

export const InputMask = ({
  keyRef,
  mask,
  title,
  error,
  value,
  outline,
  secured,
  placeholder = '',
  paddingLeft = '',
  marginBot = '',
  onChangeText,
  keyboardType,
}) => (
  <>
    {title && <Title>{title}</Title>}
    {error && <ErrorText>{error}</ErrorText>}
    <TextInput
      refInput={(ref) => ref}
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
      mask={mask}
      keyboardType={keyboardType}
    />
  </>
);
