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
  const { product, logo } = route.params;

  const handleBackPress = () => {
    navigation.navigate('Perfil');
  };

  const handleNextStep = () => {
    navigation.navigate('Confirm', { product, logo });
  };

  return (
    <Container>
      <IconView onPress={handleBackPress}>
        <Icon name="keyboard-backspace" size={30} color={colors.PRIMARY} />
      </IconView>
      <ProductImage
        source={
          logo === 'Medicacao' ? Imgs.LOGO_MEDICACAO : Imgs.LOGO_CAMINHAO2
        }
      />
      {product.status === 'Under Analysis' ? (
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
        <TitleNText title="Nome" text={product.name} />
        <TitleNText title="Email" text={product.email} />
        <TitleNText title="Celular" text={product.phone1} />
        <TitleNText title="RG" text={product.rg} />
        <TitleNText title="CPF" text={product.cpf} />
      </InfosView>
      {product.status === 'Under Analysis' ? (
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
