import styled from 'styled-components';

import { Radio } from 'antd';

export const AssistantGenderRadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

export const LargeRadioButton = styled(Radio.Button)<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding: 48px 24px;
  margin: 0 12px;

  && {
    border-radius: ${({ theme }) => theme.borderRadiusBase};
  }

  svg {
    width: 48px;
    height: 48px;

    #hoory-male-icon,
    #hoory-female-icon {
      transition: fill ${({ theme }) => theme.transitionDuration} ease;
      fill: ${({ theme, checked, $color }) => (checked ? $color : theme.disabled)};
    }
  }
`;
