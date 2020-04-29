import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Container } from '../../components';

import {
  Scroll,
  Logo,
  Card,
  CardTopView,
  CardTitleText,
  CardImage,
  CardBottomView,
  CardDescriptionText,
} from './styles';

export default function Home() {
  const Text1 = 'What is Lorem Ipsum';
  const Text2 = 'Where can I get some';
  const Text3 = 'Why do we use it';
  const TextDescription =
    'There are many variations of passages of Lorem Ipsum available, but the majority believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidde';

  const green = '77A93A';
  const grey = 'CDCDCD';
  const darkGrey = '5B5B5B';

  return (
    <Container>
      <Logo source={require('../../assets/images/LogoBranca.png')} />
      <Scroll>
        <TouchableWithoutFeedback onPress={() => { }}>
          <Card cardColor={green}>
            <CardTopView>
              <CardTitleText>{Text1}</CardTitleText>
              <CardImage
                source={require('../../assets/images/LogoBranca.png')}
              />
            </CardTopView>
            <CardBottomView>
              <CardDescriptionText>{TextDescription}</CardDescriptionText>
            </CardBottomView>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { }}>
          <Card cardColor={grey}>
            <CardTopView>
              <CardTitleText>{Text2}</CardTitleText>
              <CardImage
                source={require('../../assets/images/LogoBranca.png')}
              />
            </CardTopView>
            <CardBottomView>
              <CardDescriptionText>{TextDescription}</CardDescriptionText>
            </CardBottomView>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { }}>
          <Card cardColor={darkGrey}>
            <CardTopView>
              <CardTitleText>{Text3}</CardTitleText>
              <CardImage
                source={require('../../assets/images/LogoBranca.png')}
              />
            </CardTopView>
            <CardBottomView>
              <CardDescriptionText>{TextDescription}</CardDescriptionText>
            </CardBottomView>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { }}>
          <Card>
            <CardTopView>
              <CardTitleText>{Text3}</CardTitleText>
              <CardImage
                source={require('../../assets/images/LogoBranca.png')}
              />
            </CardTopView>
            <CardBottomView>
              <CardDescriptionText>{TextDescription}</CardDescriptionText>
            </CardBottomView>
          </Card>
        </TouchableWithoutFeedback>
      </Scroll>
    </Container>
  );
}
