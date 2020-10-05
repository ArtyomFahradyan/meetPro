import React from 'react';
import { useTranslation } from 'react-i18next';
import { CloseOutlined } from '@ant-design/icons';
import { Grid } from 'antd';
import { LayoutRow, LayoutWrapper, SidebarCol, ContentCol, ExitButton, Logo } from './styles';

const { useBreakpoint } = Grid;

type props = {
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
};

function Layout({ sidebar, children }: props) {
  const { t } = useTranslation();
  const breakpoints = sidebar ? { xs: 24, sm: 14, md: 16, lg: 17, xl: 18, xxl: 19 } : { span: 24 };
  const screens = useBreakpoint();

  return (
    <LayoutWrapper>
      {sidebar && (
        <SidebarCol xs={0} sm={10} md={8} lg={7} xl={6} xxl={5} $breakpoints={screens}>
          <LayoutRow>{sidebar}</LayoutRow>
          <LayoutRow>
            <ExitButton type="default" size="large" block icon={<CloseOutlined />}>
              {t('exitWizard')}
            </ExitButton>
          </LayoutRow>
        </SidebarCol>
      )}
      <ContentCol {...breakpoints} $breakpoints={screens}>
        <LayoutRow>
          <Logo />
        </LayoutRow>
        <LayoutRow $withPadding>{children}</LayoutRow>
      </ContentCol>
    </LayoutWrapper>
  );
}

export default Layout;
