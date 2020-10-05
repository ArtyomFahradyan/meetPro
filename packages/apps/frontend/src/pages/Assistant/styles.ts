import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { FormSelect } from '@meet/ui';
const { Text, Title } = Typography;

export const AssistantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    text-align: center;
  }
`;

export const StyledTitle = styled(Title)`
  && {
    margin-bottom: 32px;
  }
`;

export const AssistantForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > div {
    margin-bottom: 0;
  }
`;

export const SelectWrapper = styled(FormSelect)`
  margin-top: 24px;

  > div {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Hint = styled(Text)`
  margin-top: 4px;
  font-size: 12px;
  max-width: 368px;
`;

export const StyledButton = styled(Button)`
  margin-top: 32px;
`;
