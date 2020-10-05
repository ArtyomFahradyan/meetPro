import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ForgotPasswordForm, ForgotPasswordData } from '@meet/ui';
import { LinksWrapper, ChangeFormLink, CenteredTitle } from './styles';

function ForgotPassword() {
  const { t } = useTranslation('account');

  const handleSubmit = (form: ForgotPasswordData) => {
    // TODO: Replace log with workspace creation mechanism
    // eslint-disable-next-line no-console
    console.log(form);
  };

  return (
    <>
      <CenteredTitle level={4}>{t('forgotPassword')}</CenteredTitle>
      <ForgotPasswordForm onSubmit={handleSubmit} />
      <LinksWrapper>
        <ChangeFormLink>
          <Link to="../login">{t('backToSignIn')}</Link>
        </ChangeFormLink>
      </LinksWrapper>
    </>
  );
}

export default ForgotPassword;
