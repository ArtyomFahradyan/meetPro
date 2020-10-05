import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import { assistantSelector } from 'recoil/assistant';
import { LoginForm, LoginData, networkErrorNotification } from '@meet/ui';
import { WorkspaceService } from '@meet/shared';
import {
  LinksWrapper,
  ChangeFormLink,
  StyledGoogleLogo,
  GoogleButton,
  CenteredTitle
} from './styles';

const { createWorkspace } = WorkspaceService;

function Login() {
  const { t } = useTranslation('account');
  const navigate = useNavigate();
  const assistant = useRecoilValue(assistantSelector);
  const handleSubmit = async (form: LoginData) => {
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
      <CenteredTitle level={4}>{t('signInToYourAccount')}</CenteredTitle>
      <GoogleButton
        icon={<StyledGoogleLogo />}
        size="large"
        block
        onClick={sendCreateWorkspaceRequest}
      >
        {t('signInWithGoogle')}
      </GoogleButton>
      <Divider plain>or</Divider>
      <LoginForm onSubmit={handleSubmit} />
      <LinksWrapper>
        <ChangeFormLink>
          {`${t('dontHaveAnAccount')} `}
          <Link to="..">{t('signUp')}</Link>
        </ChangeFormLink>
        <ChangeFormLink>
          <Link to="../forgot">{t('forgot')}</Link>
        </ChangeFormLink>
      </LinksWrapper>
    </>
  );
}

export default Login;
