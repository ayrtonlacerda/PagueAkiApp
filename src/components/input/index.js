import React from 'react';

import { Input, ErrorText } from './styles';

const TextInput = ({
  onChangeText,
  value,
  secured = false,
  placeholder = '',
  background = '',
  paddingLeft = '',
  error = false,
}) => (
    <>
      <Input
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secured}
        placeholder={placeholder}
        background={background}
        paddingLeft={paddingLeft}
      />
      {error ? (
        <ErrorText>A senha deve possuir no mínimo 6 caracteres</ErrorText>
      ) : null}
    </>
  );

export default TextInput;
