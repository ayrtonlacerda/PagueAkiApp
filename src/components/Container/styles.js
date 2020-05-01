import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors, metrics } from '../../styles';

export const PageContainer = styled.View`
  display: flex;
  flex: 1;
  background: ${colors.BACKGROUND};
  justify-content: ${({ noCenter }) => (noCenter ? 'flex-start' : 'center')};
  align-items: ${({ noCenter }) => (noCenter ? 'flex-start' : 'center')};
  padding: ${({ noPadding }) =>
    noPadding ? '0 0 0 0' : `0px ${metrics.XBIG}px 0px ${metrics.XBIG}px`};
  padding-top: ${Platform.OS === 'ios' ? metrics.SAFEVIEW : metrics.SMALL}px;
`;
