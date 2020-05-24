import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useCommons, useLazyFetch, useValidation } from '../../hooks';
import Endpoints, { api } from '../../services';
// ui
import { MainContainer, ButtonContainer } from './styles';
import {
  Input,
  InputMask, // change name
  Container,
  ButtonTouchable,
  RadioButton,
  Picker,
  Camera,
  MiniForm,
} from '../../components';

import ProgressForm from './components/ProgressForm';

import { Schemas } from '../../util';
// lidar com o inputmask

const ENDPOINTS_SEND = {
  MEDICACAO: Endpoints.postFormDrugstore,
};

const Forms = () => {
  const { navigation, route } = useCommons();
  // const { typeForm } = route.params; // tipo do form pra busca o schema
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({});
  const [err, setErr] = useState(null);

  const typeForm = 'MEDICACAO';
  const [sendForm, { response, loading, error }] = useLazyFetch(
    ENDPOINTS_SEND[typeForm],
    form
  );
  console.log({ response, loading, error });

  // constroi campos com chaves
  useEffect(() => {
    Schemas[typeForm].map((step) =>
      step.components.map((item) =>
        setForm((prevState) => ({ ...prevState, [item.key]: null }))
      )
    );
  }, [typeForm]);

  useEffect(() => {}, [response, error]);

  // so quando processa o form
  const handleFinish = useCallback(() => {
    // so pode finalizar quando preencher todos os campos menos os com dependencia
    // mas se os de dependencia aparecer tem que preencher
    // validar preenchimento obrigatorio, email, qtade minima..
    // onde tem mascara envia strig or value?
    console.log({ api });
    sendForm();
    navigation.navigate('Finish', { typeForm });
  }, [form]);

  const handleNextStep = useCallback(() => {
    let error = {};
    const keyFromStep = Schemas[typeForm][index].components.filter(
      (item) => item.key
    );

    keyFromStep.map((item) =>
      Object.keys(form).map((key) => {
        if (
          (item.key === key && form[key] === null && !item.dependency) ||
          (item.key === key &&
            form[key] === null &&
            item.dependency &&
            item.conditional === form[item.dependency])
        ) {
          error = {
            ...error,
            [key]: 'Esse campo é obrigatorio',
          };
        }
      })
    );
    setErr(error);
    // Object.keys(error).length === 0
    if (true) {
      if (index < Schemas[typeForm].length - 1) {
        setIndex(index + 1);
      } else handleFinish();
    }
  }, [index, typeForm, form]);

  const handlePreviousStep = useCallback(() => {
    if (index > 0 && index < Schemas[typeForm].length) setIndex(index - 1);
    else navigation.navigate('Home');
  }, [index, navigation, typeForm]);

  const textOutlineButton = useMemo(() => (index === 0 ? 'HOME' : 'VOLTAR'), [
    index,
  ]);

  const textButton = useMemo(
    () => (index < Schemas[typeForm].length - 1 ? 'PRÓXIMO' : 'FINALIZAR'),
    [index, typeForm]
  );

  console.log({ form });
  return (
    <Container>
      <ProgressForm form={Schemas[typeForm]} index={index} />
      <MainContainer>
        {Schemas[typeForm][index].components.map((component) => {
          // gera uma depencia de preenchimento
          if (
            (component.name === 'Input' && !component.dependency) ||
            (component.dependency &&
              component.conditional === form[component.dependency])
          ) {
            return (
              <Input
                error={err?.[component.key]}
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
          if (
            (component.name === 'InputMask' && !component.dependency) ||
            (component.dependency &&
              component.conditional === form[component.dependency])
          ) {
            return (
              <InputMask
                error={err?.[component.key]}
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
                error={err?.[component.key]}
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
                error={err?.[component.key]}
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
                error={err?.[component.key]}
                keyRef={component.key}
                value={form[component.key]}
                title={component.title}
                crop={component.crop}
              />
            );
          }
          if (component.name === 'Miniform') {
            return (
              <MiniForm
                value={form[component.key]}
                error={err?.[component.key]}
                keyRef={component.key}
                components={component.components}
                limit={component.limit}
                onChangeOption={setForm}
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
