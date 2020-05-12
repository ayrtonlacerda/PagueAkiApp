import React from 'react';
import { ProgressContainer, Ball, Line, MiniBall } from './styles';

const ProgressForm = ({ form, index }) => (
  <ProgressContainer>
    {form.map((_, i) => (
      <>
        <Ball filled={i < index}>{i === index && <MiniBall />}</Ball>
        {i < form.length - 1 && <Line />}
      </>
    ))}
  </ProgressContainer>
);

export default ProgressForm;
