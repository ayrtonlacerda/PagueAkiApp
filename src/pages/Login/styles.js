import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${colors.BACKGROUND};
  justify-content: center;
  align-items: center;
  padding: ${metrics.XBIG}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  align-self: center;
`;

export const ButtonsView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${metrics.XXXBIG};
`;
