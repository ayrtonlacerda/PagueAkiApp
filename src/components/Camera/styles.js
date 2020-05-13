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

export const CameraContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: ${metrics.BIG};
  align-items: center;
`;

export const Photo = styled.Image`
  width: 90%;
  height: 200px;
  margin: ${metrics.RADIUS}px;
  border-radius: ${metrics.RADIUS};
`;

export const ChangeButton = styled.TouchableOpacity``;

export const ChangeButtonText = styled.Text`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: 15px;
  text-decoration-line: underline;
`;
