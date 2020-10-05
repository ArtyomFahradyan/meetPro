import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import { assistantSelector } from 'recoil/assistant';
import { WorkspaceService } from '@meet/shared';
import { CreateAccountForm, CreateAccountData, networkErrorNotification } from '@meet/ui';
import {
  LinksWrapper,
  ChangeFormLink,
  StyledGoogleLogo,
  GoogleButton,
  CenteredTitle
} from './styles';

const { createWorkspace } = WorkspaceService;

function CreateAccount() {
  const { t } = useTranslation('account');
  const navigate = useNavigate();
  const assistant = useRecoilValue(assistantSelector);
  const handleSubmit = async (form: CreateAccountData) => {
    // TODO: Replace log with workspace creation mechanism
    // eslint-disable-next-line no-console
    console.log(form);
    await sendCreateWorkspaceRequest();
  };
  const sendCreateWorkspaceRequest = async () => {
    try {
      await createWorkspace(assistant);
      navigate('/verify');
    } catch ({ status }) {
      networkErrorNotification(status);
    }
  };

  return (
    <>
      <CenteredTitle level={4}>{t('createYourAccount')}</CenteredTitle>
      <GoogleButton
        icon={<StyledGoogleLogo />}
        size="large"
        block
        onClick={sendCreateWorkspaceRequest}
      >
        {t('signUpWithGoogle')}
      </GoogleButton>
      <Divider plain>or</Divider>
      <CreateAccountForm onSubmit={handleSubmit} />
      <LinksWrapper>
        <ChangeFormLink>
          {`${t('alreadyHaveAnAccount')} `}
          <Link to="login">{t('signIn')}</Link>
        </ChangeFormLink>
      </LinksWrapper>
    </>
  );
}

export default CreateAccount;
