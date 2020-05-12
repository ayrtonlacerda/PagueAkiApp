import React from 'react';

import {
  ErrorText,
  Title,
  RadioContainer,
  OptionContainer,
  OptionText,
} from './styles';

export const RadioButton = ({ title, error, handlePress, checked }) => (
  <>
    {title && <Title>{title}</Title>}
    {error && <ErrorText>{error}</ErrorText>}
    <RadioContainer>
      <OptionContainer onPress={handlePress} checked={checked}>
        <OptionText onPress={handlePress}>SIM</OptionText>
      </OptionContainer>
      <OptionContainer onPress={handlePress} checked={!checked}>
        <OptionText onPress={handlePress}>NÃO</OptionText>
      </OptionContainer>
    </RadioContainer>
  </>
);
