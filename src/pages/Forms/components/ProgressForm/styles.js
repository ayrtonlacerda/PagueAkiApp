import styled from 'styled-components/native';
import { colors, metrics } from '../../../../styles';

// progress
export const Line = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: 1.5px;
  background-color: ${colors.SECONDARY};
`;

export const Ball = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-width: 2px;
  border-color: ${colors.SECONDARY};
  border-radius: 10px;
  background-color: ${({ filled }) =>
    filled ? colors.SECONDARY : colors.WHITE};
`;

export const MiniBall = styled.View`
  height: 13px;
  width: 13px;
  border-radius: 10px;
  background-color: ${colors.SECONDARY};
`;

export const ProgressContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 50;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.SECONDARY};
  margin-bottom: ${metrics.BIG};
`;
