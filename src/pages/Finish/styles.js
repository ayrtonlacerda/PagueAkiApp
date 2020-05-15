import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const CheckImage = styled.Image`
  width: 100;
  height: 100;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.PRIMARY};
  margin-top: ${metrics.XBIG}px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.DARK_STRONG};
  text-align: center;
  margin-top: ${metrics.MEDIUM}px;
  margin-bottom: ${metrics.XBIG}px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${colors.PRIMARY};
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${colors.PRIMARY};
  margin: ${metrics.BIG}px;
  margin-top: ${metrics.XXXBIG}px;
`;
