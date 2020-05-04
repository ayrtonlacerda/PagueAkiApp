import React from 'react';
import { LogoImage } from './styles';
import { Imgs } from '../../assets';

export const Logo = ({ big, marBottom }) => (
  <LogoImage source={Imgs.LOGO_BRANCA} big={big} marBottom={marBottom} />
);
