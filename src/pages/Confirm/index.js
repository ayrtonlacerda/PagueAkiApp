import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCommons } from '../../hooks';
import { Container, Button, Camera } from '../../components';
import { IconView, Scroll, ProductImage } from './styles';
import { Imgs } from '../../assets';
import { metrics, colors } from '../../styles';

export default function Confirm() {
  const { route, navigation } = useCommons();
  const { product } = route.params;

  console.tron.log(product);

  const handleBackPress = () => {
    navigation.navigate('ShowData');
  };

  return (
    <Container>
      <IconView onPress={handleBackPress}>
        <Icon name="keyboard-backspace" size={30} color={colors.PRIMARY} />
      </IconView>
      <ProductImage source={product.logo} />
      <Scroll>
        <Camera
          noForm
          title="1. Foto do rosto"
          hint="Certifique-se que seu rosto esteja aparecendo nitidamente na foto."
        />
        <Camera
          noForm
          title="2. Foto do termo assinado"
          hint="Tirar foto somente do termo impresso. Assegure-se que sua assinatura apareça."
          crop
        />
        <Camera
          noForm
          title="3. Foto do termo assinado ao lado do rosto"
          hint="Segure o termo ao lado do rosto de maneiro que possa aparecer a assinatura e seu rosto."
          crop
        />
      </Scroll>
      <Button
        text="Enviar"
        margin={metrics.XXBIG}
        onPress={() => { }}
        color={colors.ORANGE}
      />
    </Container>
  );
}
