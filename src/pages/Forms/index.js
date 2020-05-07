import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useCommons } from '../../hooks';
import {
  MainContainer,
  ProgressContainer,
  ButtonContainer,
  // progress
  Line,
  Ball,
  MiniBall,
} from './styles';
import {
  Input,
  InputMask, // change name
  Container,
  ButtonTouchable,
  Avatar,
} from '../../components';

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

  console.log({ form });
  return (
    <Container>
      <ProgressContainer>
        {FORM.map((_, i) => (
          <>
            <Ball filled={i < index}>{i === index && <MiniBall />}</Ball>
            {i < FORM.length - 1 && <Line />}
          </>
        ))}
      </ProgressContainer>
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
            console.log({ component });
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
