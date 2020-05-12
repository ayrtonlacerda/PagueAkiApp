import styled from 'styled-components';
import TextInputMask from 'react-native-text-input-mask';
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

export const PickerView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.BIG};
  width: 100%;
`;

export const InstructionText = styled.Text`
  font-size: 15px;
  padding: 15px;
  width: 100%;
  align-self: center;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.GREY};
`;
