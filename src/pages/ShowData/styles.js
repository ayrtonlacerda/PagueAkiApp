import styled from 'styled-components';
import { metrics } from '../../styles';

export const IconView = styled.TouchableOpacity`
  align-self: flex-start;
  margin-bottom: ${-metrics.MEDIUM}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  max-width: 220px;
  height: 100px;
  border-radius: ${metrics.RADIUS / 2};
`;

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  margin: ${metrics.SMALL}px;
`;

export const Icone = styled.Image`
  width: 25px;
  height: 25px;
  background: #fff;
`;

export const InfosView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})`
  width: 100%;
`;

export const InstructionText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;
