import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { validators, constants } from '@meet/shared';
import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';
import { StyledLink } from './styles';
const {
  isEmpty,
  isEmail,
  includesLowercase,
  includesUppercase,
  includesDigit,
  isMinLength,
  isEqual
} = validators;
const { INPUT_MAX_LENGTH, EMAIL_MAX_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } = constants;

export type CreateAccountData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
  agreement: boolean;
};
type PasswordErrors = {
  length?: string;
  upper?: string;
  lower?: string;
  digit?: string;
};

type Props = {
  onSubmit: (data: CreateAccountData) => void;
};

function CreateAccount({ onSubmit }: Props) {
  const { t } = useTranslation('ui');

  const { errors, touched, handleSubmit, handleBlur, getFieldProps, setFieldValue } = useFormik<
    CreateAccountData
  >({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      agreement: false
    },
    validate: ({ firstName, lastName, email, password, confirm, agreement }) => {
      const errors: FormikErrors<CreateAccountData> = {};

      if (isEmpty(firstName)) errors.firstName = t('form.firstNamePrompt');
      if (isEmpty(lastName)) errors.lastName = t('form.lastNamePrompt');
      if (isEmpty(email)) {
        errors.email = t('form.emailPrompt');
      } else if (!isEmail(email)) {
        errors.email = t('form.invalidEmail');
      }

      if (isEmpty(password)) {
        errors.password = t('form.passwordPrompt');
      } else {
        const passwordErrors: PasswordErrors = {};
        if (!includesLowercase(password)) passwordErrors.lower = t('form.invalidPasswordLower');
        if (!includesUppercase(password)) passwordErrors.upper = t('form.invalidPasswordUpper');
        if (!includesDigit(password)) passwordErrors.digit = t('form.invalidPasswordDigit');
        if (!isMinLength(password, PASSWORD_MIN_LENGTH))
          passwordErrors.length = t('form.invalidPasswordLength');
        if (Object.keys(passwordErrors).length) {
          errors.password = t('form.invalidPassword', { ...passwordErrors, joinArrays: '' });
        }
      }

      if (isEmpty(confirm)) {
        errors.confirm = t('form.confirmPrompt');
      } else if (!isEqual(password, confirm)) {
        errors.confirm = t('form.invalidConfirm');
      }

      if (!agreement) errors.agreement = t('form.agreementPrompt');

      return errors;
    },
    onSubmit
  });

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.currentTarget;
    setFieldValue(name, value.trim());
    handleBlur(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        size="large"
        maxLength={INPUT_MAX_LENGTH}
        placeholder={t('form.firstName')}
        touched={touched.firstName}
        error={errors.firstName}
        {...getFieldProps('firstName')}
        onBlur={(e) => {
          onBlur(e, 'firstName');
        }}
      />
      <FormInput
        size="large"
        maxLength={INPUT_MAX_LENGTH}
        placeholder={t('form.lastName')}
        touched={touched.lastName}
        error={errors.lastName}
        {...getFieldProps('lastName')}
        onBlur={(e) => {
          onBlur(e, 'lastName');
        }}
      />
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
      <FormInput
        password
        size="large"
        maxLength={PASSWORD_MAX_LENGTH}
        placeholder={t('form.confirm')}
        touched={touched.confirm}
        error={errors.confirm}
        {...getFieldProps('confirm')}
      />
      <FormCheckbox
        touched={touched.agreement}
        error={errors.agreement}
        {...getFieldProps('agreement')}
      >
        {t('form.agreement')}
        <StyledLink href="#" target="_blank">
          {t('form.termsOfService')}
        </StyledLink>
        &amp;
        <StyledLink href="#" target="_blank">
          {t('form.privacyPolicy')}
        </StyledLink>
      </FormCheckbox>
      <Button type="primary" htmlType="submit" size="large" block>
        {t('form.createAccount')}
      </Button>
    </form>
  );
}

export default CreateAccount;
