import styled from 'styled-components';
import { metrics } from '../../styles';

export const IconView = styled.TouchableOpacity`
  align-self: flex-start;
  margin-bottom: ${-metrics.MEDIUM}px;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})`
  width: 100%;
  margin-top: ${metrics.SMALL}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  max-width: 220px;
  height: 100px;
  border-radius: ${metrics.RADIUS / 2};
`;
