import React from 'react';
import { Badge } from 'antd';
import { StyledTag } from './styles';

const statusColor: { [key: string]: 'success' | 'warning' | 'default' } = {
  live: 'success',
  paused: 'warning',
  draft: 'default',
  default: 'default'
};

type Props = {
  status: 'live' | 'paused' | 'draft';
  children: React.ReactNode;
};
function IntentTag({ status, children }: Props) {
  return (
    <StyledTag color={statusColor[status]}>
      <Badge status={statusColor[status]} />
      {children}
    </StyledTag>
  );
}

export default IntentTag;
