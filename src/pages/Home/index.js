import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  PageView,
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
  const Text3 = 'Why do we use it quebra linha sa porra?';
  const TextDescription =
    'There are many variations of passages of Lorem Ipsum available, but the majority believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidde';

  return (
    <Container>
      <PageView>
        <Logo source={require('../../assets/images/LogoBranca.png')} />
        <TouchableWithoutFeedback onPress={() => { }}>
          <Card>
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
          <Card>
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
      </PageView>
    </Container>
  );
}
