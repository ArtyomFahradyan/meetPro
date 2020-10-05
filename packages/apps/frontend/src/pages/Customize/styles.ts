import styled from 'styled-components';
import { Button, Typography } from 'antd';

const { Title } = Typography;

export const CustomizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NextButton = styled(Button)`
  padding: 0 82px;
`;

export const Heading = styled(Title)`
  && {
    margin-bottom: 32px;
  }
`;
