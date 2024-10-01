import React from 'react';
import { ProgressContainer, Progress } from './styles';

const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <Progress style={{ width: `${progress}%` }} />
    </ProgressContainer>
  );
};

export default ProgressBar;
