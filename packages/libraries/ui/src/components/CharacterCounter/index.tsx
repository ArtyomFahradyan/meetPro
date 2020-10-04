import React from 'react';
import { StyledText } from './styles';

type Props = {
  value: number;
  maxLength: number;
};

function CharacterCounter({ value, maxLength }: Props) {
  return (
    <StyledText type="secondary">
      {value}/{maxLength}
    </StyledText>
  );
}

export default CharacterCounter;
