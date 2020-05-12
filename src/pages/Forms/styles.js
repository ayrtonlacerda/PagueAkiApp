import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

// views
export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${metrics.XXBIG}px;
  margin-top: ${metrics.BIG};
`;

export const MainContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  display: flex;
  flex: 1;
  width: 100%;
`;
