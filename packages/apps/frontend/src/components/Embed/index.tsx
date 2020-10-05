import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Radio, Typography, Grid, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/es/radio';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Spinner, networkErrorNotification } from '@meet/ui';
import { VerificationService } from '@meet/shared';
import {
  EmbedWrapper,
  ScriptContent,
  StyledTitle,
  StyledRadio,
  StyledTextArea,
  ScriptInfo,
  TextAreaWrapper
} from './styles';
const { Text } = Typography;
const { useBreakpoint } = Grid;
const { getEmbed } = VerificationService;

function Embed() {
  const { t } = useTranslation('embed');
  const [script, setScript] = useState<string>();
  const [data, setData] = useState<{ visitors: string; users: string }>();
  const [showUsersScript, setShowUsersScript] = useState(false);
  const screens = useBreakpoint();

  useEffect(() => {
    const fetchEmbed = async () => {
      try {
        const response = await getEmbed();
        const { data } = await response.json();
        setData(data);
      } catch ({ status }) {
        networkErrorNotification(status);
      }
    };

    fetchEmbed();
  }, []);

  useEffect(() => {
    if (data) {
      const { users, visitors } = data;
      setScript(showUsersScript ? users : visitors);
    }
  }, [data, showUsersScript]);

  const changeScript = (event: RadioChangeEvent) => {
    setShowUsersScript(event.target.value);
  };

  const handleCopy = () => {
    message.destroy();
    message.success(t('copied'));
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.currentTarget.select();
  };

  return (
    <EmbedWrapper>
      <StyledTitle level={4}>{t('hereIsTheEmbedCode')}</StyledTitle>
      <StyledRadio
        defaultValue={showUsersScript}
        size="middle"
        onChange={changeScript}
        disabled={!script}
      >
        <Radio.Button value={false} tabIndex={0}>
          {t('codeForVisitors')}
        </Radio.Button>
        <Radio.Button value={true} tabIndex={0}>
          {t('codeForLoggedInUsers')}
        </Radio.Button>
      </StyledRadio>
      <ScriptContent>
        <ScriptInfo>
          <Text type="secondary">{t('copyAndPasteThisCode')}</Text>
          <CopyToClipboard text={script || ''} onCopy={handleCopy}>
            <Button disabled={!script} size="small" tabIndex={0}>
              <CopyOutlined />
              {t('copy')}
            </Button>
          </CopyToClipboard>
        </ScriptInfo>
        <TextAreaWrapper>
          {!script && <Spinner />}
          <StyledTextArea
            rows={6}
            value={script}
            $breakpoints={screens}
            onFocus={handleFocus}
            readOnly
          />
        </TextAreaWrapper>
      </ScriptContent>
    </EmbedWrapper>
  );
}

export default Embed;
