import styled from 'styled-components';
import { Input, Typography, Radio } from 'antd';
const { Title } = Typography;
const { Group } = Radio;
const { TextArea } = Input;

type Breakpoints = {
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
  xxl?: boolean;
};

export const EmbedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  && {
    margin-bottom: 32px;
    text-align: center;
  }
`;

export const StyledRadio = styled(Group)`
  text-align: center;

  > label:first-child {
    margin-bottom: 8px;
  }
`;

export const ScriptContent = styled.div`
  margin-top: 24px;
`;

export const ScriptInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span:first-child {
    margin-right: 16px;
  }
`;

export const StyledTextArea = styled(TextArea)<{ $breakpoints: Breakpoints }>`
  resize: none;
  background-color: ${({ theme }) => theme.embedBgColor};
  width: ${({ $breakpoints }) => ($breakpoints.xxl && '900px') || ($breakpoints.xl && '760px')};
`;

export const TextAreaWrapper = styled.div`
  position: relative;
`;
