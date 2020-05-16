import React from 'react';
import { Title, Text } from './styles';

export const TitleNText = ({ title, text }) => (
  <>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </>
);
