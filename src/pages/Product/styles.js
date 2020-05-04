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

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: ${metrics.MEDIUM};
  border-radius: 25px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 23px;
  color: ${colors.WHITE};
  margin: ${metrics.MEDIUM}px;
`;

export const ProductTextView = styled.View`
  flex-direction: row;
  width: 100%;
  margin: ${metrics.MEDIUM}px 0px ${metrics.MEDIUM}px 0px;
`;
export const Point = styled.View`
  background: ${colors.WHITE};
  width: 15px;
  height: 15px;
  border-radius: 10px;
  margin: 5px 10px 0px 8px;
`;
export const ProductText = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  flex: 1;
`;
