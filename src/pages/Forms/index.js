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
} from '../../components';

import ProgressForm from './components/ProgressForm';
/*
  map step
    map componentes
*/

const FORM = [
  {
    name: 'Informações Pessoais',
    components: [
      {
        name: 'Input',
        key: 'name',
        title: 'Nome',
      },
      {
        name: 'Input',
        key: 'lastName',
        title: 'Sobrenome',
      },
      {
        name: 'InputMask',
        key: 'birthday',
        title: 'Data de Nascimento',
        mask: '[00]/[00]/[0000]',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'cpf',
        title: 'CPF',
        mask: '[000].[000].[000]-[00]',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'rg',
        title: 'RG',
        mask: '[000000]-[00]',
        type: 'numeric',
      },
      {
        name: 'Picker',
        key: 'Picker',
        title: 'Picker Test',
        options: [
          'Aposentado',
          'Pensionista',
          'Em plena atividade profissional',
          'Funcionario publico',
        ],
      },
      {
        name: 'Radio',
        key: 'Radio',
        title: 'Radio Button Test',
      },
    ],
  },
  {
    name: 'Informações Pessoais',
    components: [
      {
        name: 'Input',
        key: 'civilState',
        title: 'Estado Civil',
      },
      {
        name: 'Input',
        key: 'genere',
        title: 'Gênero',
      },
      {
        name: 'Input',
        key: 'childrens',
        title: 'Filhos',
        type: 'numeric',
      },
    ],
  },
  {
    name: 'Endereço',
    components: [
      {
        name: 'Input',
        key: 'city',
        title: 'Cidade',
      },
      {
        name: 'Input',
        key: 'state',
        title: 'Estado',
      },
      {
        name: 'Input',
        key: 'street',
        title: 'bairro',
      },
      {
        name: 'Input',
        key: 'number',
        title: 'Numero',
        type: 'numeric',
      },
      {
        name: 'InputMask',
        key: 'cep',
        title: 'CEP',
        mask: '[00000]-[000]',
        type: 'numeric',
      },
    ],
  },
  {
    name: 'Informações pagamento',
    components: [
      {
        name: 'Input',
        key: 'bank',
        title: 'Banco',
      },
      {
        name: 'Input',
        key: 'agc',
        title: 'Agencia',
        type: 'numeric',
      },
      {
        name: 'Input',
        key: 'count',
        title: 'Conta',
      },
    ],
  },
];

const Forms = () => {
  const { navigation } = useCommons();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({});
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    FORM.map((step) =>
      step.components.map((item) =>
        setForm((prevState) => ({ ...prevState, [item.key]: null }))
      )
    );
  }, []);

  const handleFinish = () => {};

  const handleNextStep = useCallback(() => {
    if (index < FORM.length - 1) setIndex(index + 1);
    else handleFinish();
  }, [index]);

  const handlePreviousStep = useCallback(() => {
    if (index > 0 && index < FORM.length) setIndex(index - 1);
    else navigation.navigate('Home');
  }, [index, navigation]);

  const textOutlineButton = useMemo(() => (index === 0 ? 'HOME' : 'VOLTAR'), [
    index,
  ]);

  const textButton = useMemo(
    () => (index < FORM.length - 1 ? 'PRÓXIMO' : 'FINALIZAR'),
    [index]
  );

  const handleRadioButton = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  console.log({ form });

  return (
    <Container>
      <ProgressForm form={FORM} index={index} />
      <MainContainer>
        {FORM[index].components.map((component) => {
          if (component.name === 'Input') {
            return (
              <Input
                value={form[component.key]}
                outline
                title={component.title}
                keyRef={component.key}
                onChangeText={setForm}
                keyboardType={component?.type}
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
              />
            );
          }
          if (component.name === 'Radio') {
            return (
              <RadioButton
                keyRef={component.key}
                value={form[component.key]}
                title={component.title}
                handlePress={handleRadioButton}
                checked={checked}
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
