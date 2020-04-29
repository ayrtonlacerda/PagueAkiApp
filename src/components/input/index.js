import React from 'react';

import { TextInput, ErrorText, Title } from './styles';

export const Input = ({
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
        onChangeText={onChangeText}
        secureTextEntry={secured}
        placeholder={placeholder}
        outline={outline}
        paddingLeft={paddingLeft}
        marginBot={marginBot}
      />
    </>
  );
