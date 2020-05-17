import React, { useRef, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  InstructionView,
  IconView,
} from './styles';

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
          <>
            <InstructionView>
              <InstructionText onPress={handleOpenPicker}>
                Selecione uma opção
              </InstructionText>
              <IconView onPress={handleOpenPicker}>
                <Icon name="expand-more" size={20} color={colors.PRIMARY} />
              </IconView>
            </InstructionView>
          </>
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
