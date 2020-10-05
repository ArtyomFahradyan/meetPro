import styled from 'styled-components';
import { Button } from 'antd';

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HoorayIcon = styled.span`
  color: initial;
  margin-left: 8px;
`;

export const SuccessButton = styled(Button)`
  margin-top: 32px;
`;
