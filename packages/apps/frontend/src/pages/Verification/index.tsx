import React from 'react';
import Embed from 'components/Embed';
import Verify from 'components/Verify';
import { VerificationWrapper } from './styles';

function Verification() {
  return (
    <VerificationWrapper>
      <Embed />
      <Verify />
    </VerificationWrapper>
  );
}

export default Verification;
