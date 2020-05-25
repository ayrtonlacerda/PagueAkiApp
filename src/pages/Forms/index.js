import React, { useCallback, useState, useEffect, useMemo } from 'react';
import * as yup from 'yup';
import { useCommons, useLazyFetch } from '../../hooks';
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
const pt = {
  'this is a required field': 'esse campo é obrigatorio',
  'this must be a valid email': 'e-mail inválido',
  'this must be at least 6 characters': 'mínimo 6 caracteres',
  'this must be at least 8 characters': 'mínimo 8 caracteres',
  'this must be at least 11 characters': 'Telefone com DDD e 9 na frente',
};

/* const schemaValidate = {
  email: yup.string().email().required(),
}; */

const schemaValidate = yup.object().shape({
  email: yup.string().email().required(),
});

const ENDPOINTS_SEND = {
  MEDICACAO: Endpoints.postFormDrugstore,
  CAMINHAO: Endpoints.postFormTrucks,
};

const ENDPOINTS_FILES = {
  MEDICACAO: Endpoints.postFilesDrugstore,
};

const Forms = () => {
  const { navigation, route } = useCommons();
  const { typeForm } = route.params; // tipo do form pra busca o schema
  const [index, setIndex] = useState(0);

  const [form, setForm] = useState({});
  const [formFormated, setFormFormated] = useState({});

  const [files, setFiles] = useState([]);
  const [filesFormated, setFilesFormated] = useState([]);

  const [err, setErr] = useState(null);

  const [sendForm, { response, loading, error }] = useLazyFetch(
    ENDPOINTS_SEND[typeForm],
    formFormated
  );

  useEffect(() => {
    sendForm();
  }, [formFormated]);

  const [
    sendFiles,
    { response: responseFiles, loading: loadingFiles, error: errorFiles },
  ] = useLazyFetch(ENDPOINTS_FILES[typeForm], filesFormated);

  useEffect(() => {
    sendFiles();
  }, [filesFormated]);

  useEffect(() => {
    console.log({ response, loading, error, responseFiles, errorFiles });
    if (response) {
      navigation.navigate('Finish', { typeForm });
    }
  }, [response, responseFiles, error, errorFiles]);

  // constroi campos com chaves
  useEffect(() => {
    Schemas[typeForm].map((step) =>
      step.components.map((item) => {
        if (item.name === 'Image') {
          setFiles((prev) => [...prev, item.key]);
        }
        setForm((prevState) => ({ ...prevState, [item.key]: null }));
      })
    );
    console.log({ files });
  }, [typeForm]);

  // so quando processa o form
  const handleFinish = useCallback(() => {
    let formated = {};
    let fileFormated = {};

    Object.keys(form).map(
      // eslint-disable-next-line no-return-assign
      (key) => {
        console.log({ key });
        if (key === 'dependents') {
          formated = {
            ...formated,
            [key]: form[key].toString() || '',
          };
          console.log({ formatedMiniForm: formated });
        } else if (!files.includes(key)) {
          formated = { ...formated, [key]: form[key] || '' };
        } else {
          fileFormated = { ...fileFormated, [key]: form[key] };
        }
      }
    );

    console.log({ formatedTotal: formated, fileFormated });

    const formData = new FormData();

    Object.keys(fileFormated).map((key) =>
      formData.append(key, {
        uri: fileFormated[key].path,
        type: 'image/jpg',
        name: `${key}.jpg`,
      })
    );

    setFormFormated(formated);
    console.log({ formData });
    setFilesFormated(formData);
    // navigation.navigate('Finish', { typeForm });
  }, [form]);

  const handleNextStep = useCallback(async () => {
    let errorValidation = {};
    const keyFromStep = Schemas[typeForm][index].components.filter(
      (item) => item.key
    );

    // varre buscando null para dizer que e obrigatorio
    keyFromStep.map((item) =>
      Object.keys(form).map((key) => {
        if (
          (item.key === key && form[key] === null && !item.dependency) ||
          (item.key === key &&
            form[key] === null &&
            item.dependency &&
            item.conditional === form[item.dependency])
        ) {
          errorValidation = {
            ...errorValidation,
            [key]: 'Esse campo é obrigatorio',
          };
        }
      })
    );

    if (form.email) {
      try {
        await schemaValidate.validate(form);
      } catch (erro) {
        errorValidation = {
          ...errorValidation,
          email: 'Email Invalido',
        };
      }
    }
    setErr(errorValidation);
    console.log({ errorValidation });
    // Object.keys(errorValidation).length === 0
    if (Object.keys(errorValidation).length === 0) {
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

  console.log({ form, files });
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
                onChangeImage={setForm}
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
