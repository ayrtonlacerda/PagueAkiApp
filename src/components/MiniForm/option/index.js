import React, { useState } from 'react';
import { Container, DeleteButton, DeleteText } from './styles';
import {
  Input,
  InputMask, // change name
  ButtonTouchable,
  RadioButton,
  Picker,
  Camera,
} from '../../index';

const Option = ({
  components = [],
  onClickRemove,
  index,
  onChangeForm,
  options,
}) => {
  const handleOnChangeform = (item, value) =>
    onChangeForm(
      options.map((itemOpt, i) => {
        if (i === index) {
          return {
            ...itemOpt,
            [item.key]: value,
          };
        }
        return itemOpt;
      })
    );

  return (
    <Container>
      <DeleteButton onPress={() => onClickRemove(index)}>
        <DeleteText>X</DeleteText>
      </DeleteButton>
      {components.map((item) => {
        if (item.name === 'Input') {
          return (
            <Input
              // value={form[component.key]}
              outline
              title={item.title}
              // keyRef={item.key}
              onChangeText={(value) => handleOnChangeform(item, value)}
              keyboardType={item?.type}
              placeholder={item.placeholder}
            />
          );
        }
        if (item.name === 'InputMask') {
          return (
            <InputMask
              // error={err?.[component.key]}
              // value={form[component.key]}
              outline
              title={item.title}
              keyRef={item.key}
              onChangeText={(value) => handleOnChangeform(item, value)}
              mask={item.mask}
              keyboardType={item?.type}
              placeholder={item.placeholder}
            />
          );
        }
        if (item.name === 'Picker') {
          return (
            <Picker
              // error={err?.[item.key]}
              keyRef={item.key}
              value={options[index][item.key]}
              options={item.options}
              title={item.title}
              onChangeOption={(value) => handleOnChangeform(item, value)}
            />
          );
        }
      })}
    </Container>
  );
};

export default Option;
