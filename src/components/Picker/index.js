import React, { useRef, useState, useCallback } from 'react';
import PickerBox from 'react-native-picker-box';
import { colors } from '../../styles';

import {
  ErrorText,
  Title,
  PickerView,
  InstructionText,
  WithOutFeedBack,
  ModalPicker,
  ContainerModal,
  BoxOptions,
  Scroll,
  Options,
  TextOptions,
  CheckIcon,
} from './styles';

const data = [
  { label: 'Português', value: 'pt' },
  { label: 'Deutsch', value: 'de' },
  { label: 'English', value: 'en' },
];

export const Picker = ({
  keyRef,
  title,
  error,
  selected,
  options = [],
  onChangeOption,
  value,
}) => {
  const [show, setShow] = useState(false);

  const handleOpenPicker = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleSelectOptions = useCallback(
    (item) => {
      onChangeOption((prevState) => ({ ...prevState, [keyRef]: item }));
      setShow(!show);
    },
    [show]
  );

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <PickerView>
        {value ? (
          <InstructionText onPress={handleOpenPicker}>{value}</InstructionText>
        ) : (
          <InstructionText onPress={handleOpenPicker}>
            Selecione uma opção
          </InstructionText>
        )}
        <ModalPicker
          animationType="slide"
          transparent
          visible={show}
          onRequestClose={() => {}}
        >
          <ContainerModal onPress={handleOpenPicker}>
            <WithOutFeedBack>
              <BoxOptions>
                <Scroll>
                  {options.map((item) => (
                    <Options onPress={() => handleSelectOptions(item)}>
                      {value === item && <CheckIcon />}
                      <TextOptions>{item}</TextOptions>
                    </Options>
                  ))}
                </Scroll>
              </BoxOptions>
            </WithOutFeedBack>
          </ContainerModal>
        </ModalPicker>
      </PickerView>
    </>
  );
};
