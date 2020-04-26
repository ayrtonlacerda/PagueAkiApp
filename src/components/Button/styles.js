import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors, metrics } from '../../styles';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${colors.PRIMARY};
  border-radius: ${metrics.RADIUS}px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 50px;
  width: ${({ half }) => (half ? 47 : 100)}%;
  border-width: ${({ outline }) => (outline ? 2 : 0)}px;
  border-color: ${colors.PRIMARY};
  background: ${({ outline }) =>
    outline ? colors.BACKGROUND : colors.PRIMARY};
`;

export const Text = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: ${({ outline }) => (outline ? colors.PRIMARY : colors.BACKGROUND)};
  font-weight: bold;
  text-align: center;
`;

export const TextButton = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: ${colors.PRIMARY};
`;

export const Loading = styled.ActivityIndicator.attrs(({ outline }) => ({
  color: outline ? colors.PRIMARY : colors.BACKGROUND,
}))``;
