import styled from 'styled-components';
import { ReactComponent as GoogleLogo } from '@meet/assets/icons/google.svg';
import { Typography, Button, Avatar } from 'antd';
const { Text, Title } = Typography;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const CenteredTitle = styled(Title)`
  && {
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const StyledGoogleLogo = styled(GoogleLogo)`
  height: 24px;
`;

export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeFormLink = styled(Text)`
  :not(:first-child) {
    margin-top: 8px;
  }

  > a:focus {
    text-decoration: underline;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 32px;
  padding: 0 64px;

  & + & {
    margin-top: 16px;
  }
`;

export const StyledTitle = styled(Title)`
  && {
    margin-bottom: 0;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    margin-top: 32px;
    margin-bottom: 20px;
  }
`;
