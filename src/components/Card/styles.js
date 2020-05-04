import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

// Cards maiores

export const CardContainer = styled.View`
  height: 180px;
  width: 100%;
  background: ${({ cardColor }) => cardColor || colors.PRIMARY};
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 20px;
`;

export const CardTopView = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 13px;
  align-items: center;
`;

export const CardTitleText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
  width: 218px;
`;

export const CardImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 10px;
`;

export const CardBottomView = styled.View`
  flex: 1.3;
  padding-left: 13px;
`;

export const CardDescriptionText = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #fff;
  font-size: 14px;
  flex: 1;
`;

// Cards menores
export const ServiceCard = styled.View`
  flex-direction: row;
  height: 65px;
  width: 100%;
  align-items: center;
  padding: 7px;
  padding-left: 15px;
  border-radius: 15px;
  margin-top: 20px;
  background: ${({ cardColor }) => cardColor || colors.PRIMARY};
`;

export const ServiceCardImage = styled.Image`
  width: 60px;
  height: 55px;
  border-radius: 10px;
  margin-right: 8px;
`;

export const ServiceCardText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;
