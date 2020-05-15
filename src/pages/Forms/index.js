import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useCommons } from '../../hooks';
import { MainContainer, ProgressContainer, ButtonContainer } from './styles';
import { colors } from '../../styles';
import {
  Input,
  InputMask, // change name
  Container,
  ButtonTouchable,
  RadioButton,
  Picker,
  Camera,
} from '../../components';

import ProgressForm from './components/ProgressForm';

import { Schemas } from '../../util';
// lidar com o inputmask

const Forms = () => {
  const { navigation } = useCommons();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({});

  // constroi campos com chaves
  useEffect(() => {
    Schemas.MEDICACAO.map((step) =>
      step.components.map((item) =>
        setForm((prevState) => ({ ...prevState, [item.key]: null }))
      )
    );
  }, []);

  const handleFinish = useCallback(() => navigation.navigate('Finish'), []);

  const handleNextStep = useCallback(() => {
    if (index < Schemas.MEDICACAO.length - 1) setIndex(index + 1);
    else handleFinish();
  }, [index]);

  const handlePreviousStep = useCallback(() => {
    if (index > 0 && index < Schemas.MEDICACAO.length) setIndex(index - 1);
    else navigation.navigate('Home');
  }, [index, navigation]);

  const textOutlineButton = useMemo(() => (index === 0 ? 'HOME' : 'VOLTAR'), [
    index,
  ]);

  const textButton = useMemo(
    () => (index < Schemas.MEDICACAO.length - 1 ? 'PRÓXIMO' : 'FINALIZAR'),
    [index]
  );

  const date = new Date('01/05/1994');
  console.log({ date });

  return (
    <Container>
      <ProgressForm form={Schemas.MEDICACAO} index={index} />
      <MainContainer>
        {Schemas.MEDICACAO[index].components.map((component) => {
          if (component.name === 'Input') {
            return (
              <Input
                value={form[component.key]}
                outline
                title={component.title}
                keyRef={component.key}
                onChangeText={setForm}
                keyboardType={component?.type}
                placeholder={component.placeholder}
              />
            );
          }
          if (component.name === 'InputMask') {
            return (
              <InputMask
                value={form[component.key]}
                outline
                title={component.title}
                keyRef={component.key}
                onChangeText={setForm}
                mask={component.mask}
                keyboardType={component?.type}
                placeholder={component.placeholder}
              />
            );
          }
          if (component.name === 'Radio') {
            return (
              <RadioButton
                keyRef={component.key}
                value={form[component.key]}
                title={component.title}
                onChangeOption={setForm}
                opt1={component.opt1}
                opt2={component.opt2}
              />
            );
          }
          if (component.name === 'Picker') {
            return (
              <Picker
                keyRef={component.key}
                value={form[component.key]}
                options={component.options}
                title={component.title}
                onChangeOption={setForm}
              />
            );
          }
          if (component.name === 'Image') {
            return (
              <Camera
                keyRef={component.key}
                value={form[component.key]}
                title={component.title}
                crop={component.crop}
              />
            );
          }
          return null;
        })}
      </MainContainer>
      <ButtonContainer>
        <ButtonTouchable
          handleOnPress={handlePreviousStep}
          text={textOutlineButton}
          half
          outline
        />
        <ButtonTouchable
          handleOnPress={handleNextStep}
          text={textButton}
          half
        />
      </ButtonContainer>
    </Container>
  );
};

export { Forms };

/*
<Input outline title="Questão form" />
        <Input outline title="Questão form" />
        <Input outline title="Questão form" />
        <Input outline title="Questão form" />
        <Input outline title="Questão form" />
        <Input outline title="Questão form" />
*/
