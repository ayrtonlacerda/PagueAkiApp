import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCommons } from '../../hooks';
import { Container, Button, TitleNText } from '../../components';
import {
  IconView,
  ProductImage,
  TitleView,
  ProductTitle,
  Icone,
  InfosView,
  InstructionText,
} from './styles';
import { Imgs } from '../../assets';
import { metrics, colors } from '../../styles';

export default function ShowData() {
  const { route, navigation } = useCommons();
  const { product } = route.params;
  const infos = product.data;

  const handleBackPress = () => {
    navigation.navigate('Perfil');
  };

  const handleNextStep = () => {
    navigation.navigate('Confirm', { product });
  };

  return (
    <Container>
      <IconView onPress={handleBackPress}>
        <Icon name="keyboard-backspace" size={30} color={colors.PRIMARY} />
      </IconView>
      <ProductImage source={product.logo} />
      {product.status === 'Await' ? (
        <TitleView>
          <ProductTitle>SERVIÇO NÃO ESTÁ ATIVO</ProductTitle>
          <Icone source={Imgs.ALERT} />
        </TitleView>
      ) : null}
      {product.status === 'Active' ? (
        <TitleView>
          <ProductTitle>SERVIÇO ATIVO</ProductTitle>
          <Icone source={Imgs.CHECK} />
        </TitleView>
      ) : null}
      {product.status === 'Canceled' ? (
        <TitleView>
          <ProductTitle>SERVIÇO CANCELADO</ProductTitle>
          <Icone source={Imgs.CLOSE} />
        </TitleView>
      ) : null}
      <InfosView>
        <TitleNText title="Nome" text={infos.name} />
        <TitleNText title="Email" text={infos.email} />
        <TitleNText title="Celular" text={infos.phone1} />
        <TitleNText title="RG" text={infos.rg} />
        <TitleNText title="CPF" text={infos.cpf} />
      </InfosView>
      {product.status === 'Await' ? (
        <>
          <InstructionText>
            Clique no botão para enviar o termo assinado
          </InstructionText>
          <Button
            text="Próxima etapa"
            margin={metrics.BIG}
            color={colors.ORANGE}
            handleOnPress={handleNextStep}
          />
        </>
      ) : null}
      {product.status === 'Active' ? (
        <Button
          text="Cancelar"
          margin={metrics.BIG}
          color={colors.RED}
          onPress={() => { }}
        />
      ) : null}
      {product.status === 'Canceled' ? (
        <Button text="Reativar" margin={metrics.BIG} onPress={() => { }} />
      ) : null}
    </Container>
  );
}
