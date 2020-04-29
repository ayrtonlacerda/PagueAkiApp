import React from 'react';
import { PageContainer } from './styles';

export const Container = ({ children, noPadding, noCenter }) => (
  <PageContainer noPadding={noPadding} noCenter={noCenter}>
    {children}
  </PageContainer>
);
