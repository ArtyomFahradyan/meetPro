import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikErrors } from 'formik';
import { Button } from 'antd';
import { validators, constants } from '@meet/shared';
import FormInput from '../FormInput';
const { isEmpty, isEmail } = validators;
const { PASSWORD_MAX_LENGTH, EMAIL_MAX_LENGTH } = constants;

export type LoginData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (data: LoginData) => void;
};

function Login({ onSubmit }: Props) {
  const { t } = useTranslation('ui');

  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: ({ email, password }) => {
      const errors: FormikErrors<LoginData> = {};

      if (isEmpty(email)) {
        errors.email = t('form.emailPrompt');
      } else if (!isEmail(email)) {
        errors.email = t('form.invalidEmail');
      }

      if (isEmpty(password)) {
        errors.password = t('form.passwordPrompt');
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
      <FormInput
        password
        size="large"
        maxLength={PASSWORD_MAX_LENGTH}
        placeholder={t('form.password')}
        touched={touched.password}
        error={errors.password}
        {...getFieldProps('password')}
      />
      <Button type="primary" htmlType="submit" size="large" block>
        {t('form.login')}
      </Button>
    </form>
  );
}

export default Login;
