import React from 'react';
import { Typography, notification } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text } = Typography;

type Props = {
  translationKey: string;
};
function NetworkError({ translationKey }: Props) {
  const { t } = useTranslation('ui');

  return <Text>{t(`networkError.${translationKey}`)}</Text>;
}

function networkErrorNotification(error: number) {
  switch (error) {
    case 400:
      notification.error({
        message: <NetworkError translationKey="badRequest" />,
        description: <NetworkError translationKey="badRequestDescription" />
      });
      break;

    case 401:
      notification.error({
        message: <NetworkError translationKey="unauthorized" />,
        description: <NetworkError translationKey="unauthorizedDescription" />
      });
      break;

    default:
      notification.error({
        message: <NetworkError translationKey="unknown" />,
        description: <NetworkError translationKey="unknownDescription" />
      });
      break;
  }
}

export default networkErrorNotification;
