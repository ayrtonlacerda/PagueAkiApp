import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const LogoImage = styled.Image`
  width: ${({ big }) => (big ? 270 : 230)}px;
  height: 75px;
  background: #fff;
  align-self: center;
  margin-bottom: ${({ marBottom }) =>
    marBottom ? metrics.XXBIG : metrics.XXSMALL}px;
`;
