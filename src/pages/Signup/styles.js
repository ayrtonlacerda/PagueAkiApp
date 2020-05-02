import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
    padding: metrics.BIG,
  },
})`
  flex: 1;
  background: #f9f9f9;
`;

export const ButtonsView = styled.View`
  padding-bottom: 30px;
  width: 90%;
  align-items: center;
`;
