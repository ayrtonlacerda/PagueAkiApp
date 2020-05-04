import React from 'react';
import { PageContainer } from './styles';

export const Container = ({ children, noPadding, noCenter, background }) => (
  <PageContainer
    noPadding={noPadding}
    noCenter={noCenter}
    background={background}
  >
    {children}
  </PageContainer>
);
