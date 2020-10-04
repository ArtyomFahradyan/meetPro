import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { validators, constants } from '@meet/shared';
import FormInput from '../FormInput';
const { isEmpty, isEmail } = validators;
const { EMAIL_MAX_LENGTH } = constants;

export type ForgotPasswordData = {
  email: string;
};

type Props = {
  onSubmit: (data: ForgotPasswordData) => void;
};

function ForgotPassword({ onSubmit }: Props) {
  const { t } = useTranslation('ui');
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      email: ''
    },
    validate: ({ email }) => {
      const errors: FormikErrors<ForgotPasswordData> = {};

      if (isEmpty(email)) {
        errors.email = t('form.emailPrompt');
      } else if (!isEmail(email)) {
        errors.email = t('form.invalidEmail');
      }

      return errors;
    },
    onSubmit
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        size="large"
        maxLength={EMAIL_MAX_LENGTH}
        placeholder={t('form.email')}
        touched={touched.email}
        error={errors.email}
        {...getFieldProps('email')}
      />
      <Button type="primary" htmlType="submit" size="large" block>
        {t('form.forgot')}
      </Button>
    </form>
  );
}

export default ForgotPassword;
