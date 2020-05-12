import React, { useState, useCallback, useEffect } from 'react';

import {
  ErrorText,
  Title,
  RadioContainer,
  OptionContainer,
  OptionText,
} from './styles';

export const RadioButton = ({
  keyRef,
  title,
  error,
  onChangeOption,
  opt1,
  opt2,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const result = !checked ? opt1 : opt2;
    onChangeOption((prevState) => ({ ...prevState, [keyRef]: result }));
  }, [checked]);

  const handleRadioButton = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <RadioContainer>
        <OptionContainer
          onPress={!checked ? () => {} : handleRadioButton}
          checked={checked}
        >
          <OptionText>{opt1 || 'SIM'}</OptionText>
        </OptionContainer>
        <OptionContainer
          onPress={!checked ? handleRadioButton : () => {}}
          checked={!checked}
        >
          <OptionText>{opt2 || 'NÃO'}</OptionText>
        </OptionContainer>
      </RadioContainer>
    </>
  );
};
