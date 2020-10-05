import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { SuccessWrapper, HoorayIcon, SuccessButton } from './style';
const { Title, Text } = Typography;

const Success = () => {
  const { t } = useTranslation('success');

  return (
    <SuccessWrapper>
      <Title level={4}>
        {t('hooray')}
        <HoorayIcon>
          <span role="img" aria-labelledby="party">
            🎉
          </span>
        </HoorayIcon>
      </Title>
      <Text type="secondary">{t('successText')}</Text>
      <Text type="secondary">{t('successInfo')} %name%!</Text>
      <SuccessButton type="primary" size="large" block>
        {t('goWorkspace')}
      </SuccessButton>
    </SuccessWrapper>
  );
};

export default Success;
