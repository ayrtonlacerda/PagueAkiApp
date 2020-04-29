import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const TextInput = styled.TextInput`
  height: 50px;
  background: ${({ outline }) =>
    outline ? colors.BACKGROUND : colors.GREY_LIGHT};
  border-radius: ${metrics.RADIUS}px;
  color: ${colors.DARK_STRONG};
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${paddingLeft}` : metrics.MEDIUM}px;
  margin-bottom: ${({ marginBot }) =>
    marginBot ? metrics.XXXBIG : metrics.BIG};
  border-width: ${({ outline }) => (outline ? 1 : 0)}px;
  border-color: ${colors.GREY};
  width: 100%;
`;

export const Title = styled.Text`
  color: ${colors.DARK};
  margin-bottom: ${metrics.XSMALL}px;
  font-size: 14px;
  align-self: flex-start;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  padding-left: ${metrics.XSMALL};
  color: ${colors.RED};
  margin-bottom: ${metrics.XXSMALL}px;
`;
