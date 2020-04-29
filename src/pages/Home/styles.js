import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
  },
})`
  flex: 1;
`;

export const Logo = styled.Image`
  width: 73%;
  height: 13%;
  background: #fff;
  align-self: center;
`;

export const Card = styled.View`
  height: 180px;
  width: 100%;
  background: ${(props) =>
    props.cardColor ? `#${props.cardColor}` : '#77a93a'};
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
  flex: 1;
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
