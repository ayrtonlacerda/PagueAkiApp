import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.WHITE};
  padding: ${metrics.SMALL}px;
  padding-top: ${metrics.SMALL + 5}px;
  border-width: 1px;
  border-color: ${colors.GREY};
  border-radius: ${metrics.RADIUS};
  margin-bottom: ${metrics.SMALL}px;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 4px;
  left: 93%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.RED};
  padding: ${metrics.SMALL / 2}px ${metrics.SMALL}px ${metrics.SMALL / 2}px
    ${metrics.SMALL}px;
  border-radius: ${metrics.RADIUS / 2};
`;

export const DeleteText = styled.Text`
  font-size: 12;
  color: ${colors.WHITE};
  font-weight: bold;
`;
