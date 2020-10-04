import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { PaletteType } from './index';

type Breakpoints = {
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
  xxl?: boolean;
};

export const RadioPaletteWrapper = styled.div<{ $breakpoints: Breakpoints }>`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  flex-wrap: ${({ $breakpoints }) => ($breakpoints.md ? 'nowrap' : 'wrap')};
`;

export const RadioItem = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 25%;
`;

export const PaletteItem = styled.div<{ $value: string; $type: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: 0 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: ${({ $type, $value }) => ($type === PaletteType.COLOR ? $value : 'none')};
  transition: all ${({ theme }) => theme.transitionDuration} ease;

  svg.pattern {
    width: 100%;
    height: 100%;
  }

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(98, 59, 234, 0.08);
  }
`;

export const CheckIconWrapper = styled(motion.div)`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  line-height: 0;
`;

export const CheckIcon = styled(CheckOutlined)<{ $type: string }>`
  font-size: 18px;
  color: ${({ theme, $type }) => ($type === PaletteType.PATTERN ? theme.primary : theme.light)};
`;
