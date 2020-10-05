import styled from 'styled-components';
import { Button, Row, Col } from 'antd';
import { ReactComponent as HooryLogo } from '@meet/assets/icons/hoory-logo.svg';

type Breakpoints = {
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xl?: boolean;
  xs?: boolean;
  xxl?: boolean;
};

export const ExitButton = styled(Button)`
  align-self: flex-end;
`;

export const LayoutWrapper = styled(Row)`
  height: 100%;
`;

export const LayoutRow = styled(Row)<{ $withPadding?: boolean }>`
  padding: ${({ $withPadding }) => ($withPadding ? '64px 0' : 'unset')};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(HooryLogo)`
  margin-top: 64px;
  align-self: flex-start;
`;

export const SidebarCol = styled(Col)<{ $breakpoints: Breakpoints }>`
  background: ${({ theme }) => theme.sidebarBgColor};
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ $breakpoints }) => ($breakpoints.xs ? 'none' : 'flex')};
  justify-content: center;
  flex-direction: column;
  padding: 64px ${({ $breakpoints }) => ($breakpoints.lg ? '36px' : '20px')};

  &::before {
    content: '';
    flex: 1;
  }
`;

export const ContentCol = styled(Col)<{ $breakpoints: Breakpoints }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  padding: 0 ${({ $breakpoints }) => ($breakpoints.lg ? '36px' : '20px')};

  &::after {
    content: '';
    flex: 1;
  }
`;
