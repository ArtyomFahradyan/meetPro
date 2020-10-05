import React from 'react';
import { Typography } from 'antd';
import { useRecoilValue } from 'recoil';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { networkErrorNotification } from '@meet/ui';
import { WorkspaceService } from '@meet/shared';
import { assistantSelector } from 'recoil/assistant';
import { ProfileWrapper, StyledButton, StyledAvatar, StyledTitle } from './styles';

const { Text } = Typography;
const { createWorkspace } = WorkspaceService;

function Profile() {
  const { t } = useTranslation('account');
  const navigate = useNavigate();
  const assistant = useRecoilValue(assistantSelector);
  const handleCreateAccount = () => {
    navigate('..');
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
    <ProfileWrapper>
      <StyledTitle level={4}>{t('yourAccount')}</StyledTitle>
      <StyledAvatar size={100} icon={<UserOutlined />} />
      <StyledTitle level={4}>Name Surname</StyledTitle>
      <Text type="secondary">email@meet.com</Text>
      <StyledButton type="primary" size="large" block onClick={sendCreateWorkspaceRequest}>
        {t('useThisAccount')}
      </StyledButton>
      <StyledButton size="large" onClick={handleCreateAccount} block>
        {t('createNewAccount')}
      </StyledButton>
    </ProfileWrapper>
  );
}

export default Profile;
