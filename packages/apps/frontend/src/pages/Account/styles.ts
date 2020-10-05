import styled from 'styled-components';
import { motion } from 'framer-motion';

type Breakpoints = {
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
  xxl?: boolean;
};

export const AccountWrapper = styled(motion.div)<{ $breakpoints: Breakpoints }>`
  width: ${({ $breakpoints }) => ($breakpoints.md ? '368px' : '100%')};
  max-width: 368px;
`;
