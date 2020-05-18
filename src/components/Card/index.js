import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  CardContainer,
  CardTopView,
  CardTitleText,
  CardImage,
  CardBottomView,
  CardDescriptionText,
  ServiceCard,
  ServiceCardText,
  ServiceCardImage,
} from './styles';

export const Card = ({
  big,
  cardColor,
  titleText,
  source,
  descriptionText,
  cardText,
  handleOnPress,
}) =>
  big ? (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <CardContainer cardColor={cardColor}>
        <CardTopView>
          <CardTitleText>{titleText}</CardTitleText>
          <CardImage source={source} />
        </CardTopView>
        <CardBottomView>
          <CardDescriptionText>{descriptionText}</CardDescriptionText>
        </CardBottomView>
      </CardContainer>
    </TouchableWithoutFeedback>
  ) : (
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <ServiceCard cardColor={cardColor} onPress={handleOnPress}>
          <ServiceCardText>{cardText}</ServiceCardText>
          <ServiceCardImage source={source} />
        </ServiceCard>
      </TouchableWithoutFeedback>
    );
