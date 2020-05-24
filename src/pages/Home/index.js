import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth } from '../../global';
import { Container, Logo, Card } from '../../components';
import { useCommons } from '../../hooks';
import { PRODUCT_LIST } from '../../util';
import { api } from '../../services';

import { Scroll } from './styles';

export default function Home() {
  const { data: dataUser, setDataAuth } = useAuth();
  const { navigation } = useCommons();

  const handleToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('@PagueAkiToken');
    console.log({ token });
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setDataAuth(true);
    }
  }, []);

  useEffect(() => {
    handleToken();
  }, []);

  console.log({ dataUser });
  const handleProduct = useCallback(
    (product) => navigation.navigate('Product', { product }),
    [navigation]
  );
  return (
    <Container>
      <Logo />
      <Scroll>
        {PRODUCT_LIST.map((data) => (
          <Card
            big
            source={data.logo}
            titleText={data.texto}
            descriptionText={data.descricao}
            handleOnPress={() => handleProduct(data)}
            cardColor={data.color}
          />
        ))}
      </Scroll>
    </Container>
  );
}
