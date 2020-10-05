import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from 'antd';
import { useFormik, FormikErrors } from 'formik';
import { validators } from '@meet/shared';
import { VerifyWrapper, StyledInput, FormWrapper } from './styles';
const { Title, Text } = Typography;
const { isEmpty, isUrl } = validators;

const PROTOCOL = 'https://';

type VerifyData = {
  url: string;
};
function Verify() {
  const { t } = useTranslation('verify');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    setIsLoading(true);
    // TODO: call shared verification service
    setTimeout(() => {
      setIsLoading(false);
      navigate('/success');
    }, 3000);
  };

  const { errors, touched, handleSubmit, getFieldProps } = useFormik<VerifyData>({
    initialValues: {
      url: ''
    },
    validate: ({ url }) => {
      const errors: FormikErrors<VerifyData> = {};

      if (isEmpty(url)) {
        errors.url = t('urlPrompt');
      } else if (!isUrl(PROTOCOL + url)) {
        errors.url = t('invalidUrl');
      }

      return errors;
    },
    onSubmit
  });

  return (
    <VerifyWrapper>
      <Title level={4}>{t('enterUrl')}</Title>
      <Text type="secondary">{t('makeSure')}</Text>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledInput
          size="large"
          addonBefore={PROTOCOL}
          placeholder={t('placeholder')}
          touched={touched.url}
          error={errors.url}
          {...getFieldProps('url')}
        />
        <Button type="primary" htmlType="submit" size="large" loading={isLoading} block>
          {t('verify')}
        </Button>
        <Button size="large" disabled={isLoading} block>
          {t('skip')}
        </Button>
      </FormWrapper>
    </VerifyWrapper>
  );
}

export default Verify;
