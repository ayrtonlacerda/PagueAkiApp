import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

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
  align-self: flex-start;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 35px;
  margin-bottom: ${metrics.BIG};
  border-width: 1px;
  border-color: ${colors.GREY};
  border-radius: 12px;
`;

export const OptionContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.RADIUS};
  background: ${({ checked }) =>
    checked ? colors.BACKGROUND : colors.PRIMARY};
`;

export const OptionText = styled.Text`
  font-size: 15px;
  color: ${({ checked }) => (checked ? colors.WHITE : colors.PRIMARY)};
`;
