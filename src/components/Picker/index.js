import React, { useRef, useState } from 'react';
import PickerBox from 'react-native-picker-box';
import { colors } from '../../styles';

import { ErrorText, Title, PickerView, InstructionText } from './styles';

const data = [
  { label: 'Português', value: 'pt' },
  { label: 'Deutsch', value: 'de' },
  { label: 'English', value: 'en' },
];

export const Picker = ({ title, error, handlePicker, selected }) => {
  let pickerRef = useRef();

  const open = () => {
    if (pickerRef) {
      pickerRef.openPicker();
    }
  };

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <PickerView>
        {selected ? (
          <InstructionText onPress={open}>{selected}</InstructionText>
        ) : (
            <InstructionText onPress={open}>Selecione uma opção</InstructionText>
          )}
      </PickerView>
      <PickerBox
        ref={(ref) => (pickerRef = ref)}
        data={data}
        onValueChange={handlePicker}
        prevTextLabel="Cancelar"
        prevTextColor={colors.PRIMARY}
        separatorColor={colors.BACKGROUND}
      />
    </>
  );
};
