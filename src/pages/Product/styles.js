import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const OnBoardView = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: metrics.SCREEN_WIDTH - 2 * metrics.XBIG,
  },
})``;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  max-width: 220px;
  height: 100px;
  margin-top: ${metrics.MEDIUM};
  border-radius: ${metrics.RADIUS / 2};
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 23px;
  color: ${colors.WHITE};
  margin: ${metrics.MEDIUM}px;
`;

export const ProductTextView = styled.View`
  flex-direction: row;
  width: ${metrics.SCREEN_WIDTH * 0.8}px;
  margin: ${metrics.SMALL}px 0px ${metrics.SMALL}px 0px;
`;
export const Point = styled.View`
  background: ${colors.WHITE};
  width: 12px;
  height: 12px;
  border-radius: 10px;
  margin: 5px 10px 0px 0px;
`;
export const ProductText = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  flex: 1;
  text-align: justify;
`;

export const ViewBall = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Ball = styled.View`
  width: 10px;
  height: 10px;
  border-radius: ${metrics.RADIUS / 3};
  background-color: ${({ filled }) =>
    filled ? colors.BLUE : colors.BACKGROUND};
  margin: ${({ noMargin }) =>
    noMargin
      ? `0 ${metrics.MEDIUM}px ${0}px
    ${metrics.MEDIUM}px`
      : `0 ${metrics.MEDIUM}px ${metrics.MEDIUM * 2}px
    ${metrics.MEDIUM}px`};
`;
