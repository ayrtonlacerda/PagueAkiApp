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
      <OptionContainer
        onPress={!checked ? () => {} : handlePress}
        checked={checked}
      >
        <OptionText>SIM</OptionText>
      </OptionContainer>
      <OptionContainer
        onPress={!checked ? handlePress : () => {}}
        checked={!checked}
      >
        <OptionText>NÃO</OptionText>
      </OptionContainer>
    </RadioContainer>
  </>
);
