import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinnerWrapper, RelativeWrapper } from './styles';

type props = {
  relative?: boolean;
};

function Spinner({ relative }: props) {
  const Loading = (
    <SpinnerWrapper>
      <Spin indicator={<LoadingOutlined spin style={{ fontSize: '40px' }} />} />
    </SpinnerWrapper>
  );

  if (relative) {
    return <RelativeWrapper>{Loading}</RelativeWrapper>;
  }
  return Loading;
}

export default Spinner;
