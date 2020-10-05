import styled from 'styled-components';
import { FormInput } from '@meet/ui';

export const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(FormInput)`
  width: 100%;
  margin-bottom: 32px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  button {
    padding: 0 93px;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
