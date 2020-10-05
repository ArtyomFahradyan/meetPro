import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import { useFormik, FormikErrors } from 'formik';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { CharacterCounter, FormInput } from '@meet/ui';
import { validators } from '@meet/shared';
import { stepStatusSelector } from 'recoil/navigation';
import { assistantNameAtom, assistantDefaultLanguageAtom } from 'recoil/assistant';
import {
  StyledTitle,
  AssistantWrapper,
  AssistantForm,
  Hint,
  SelectWrapper,
  StyledButton
} from './styles';
const { Option } = Select;
const { isEmpty } = validators;

type DefaultLanguage = {
  value: string;
};
type AssistantData = {
  name: string;
  defaultLanguage: string;
};

function Assistant() {
  const { t } = useTranslation('assistant');
  const [defaultLanguages, setDefaultLanguages] = useState<DefaultLanguage[]>();
  const [name, setName] = useRecoilState(assistantNameAtom);
  const [defaultLanguage, setDefaultLanguage] = useRecoilState(assistantDefaultLanguageAtom);
  const setStepStatusValue = useSetRecoilState(stepStatusSelector(0));
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: fetch default languages from backend
    setTimeout(() => {
      setDefaultLanguages([{ value: 'en' }, { value: 'ru' }, { value: 'fr' }]);
    }, 2000);
  }, []);

  const onSubmit = ({ name, defaultLanguage }: AssistantData) => {
    setName(name);
    setDefaultLanguage(defaultLanguage);
    setStepStatusValue(true);
    navigate('/customize');
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    getFieldProps,
    setFieldValue
  } = useFormik<AssistantData>({
    initialValues: { name, defaultLanguage },
    validate: ({ name, defaultLanguage }) => {
      const errors: FormikErrors<AssistantData> = {};

      if (isEmpty(name)) errors.name = t('namePrompt');
      if (!defaultLanguage) errors.defaultLanguage = t('defaultLanguagePrompt');

      return errors;
    },
    onSubmit
  });

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setFieldValue('name', value.trim());
    handleBlur(e);
  };

  return (
    <AssistantWrapper>
      <StyledTitle level={4}>{t('welcomeTitle')}</StyledTitle>
      <AssistantForm onSubmit={handleSubmit}>
        <CharacterCounter value={values.name.length} maxLength={15} />
        <FormInput
          size="large"
          maxLength={15}
          placeholder={t('placeholderName')}
          touched={touched.name}
          error={errors.name}
          {...getFieldProps('name')}
          onBlur={onBlur}
        />
        <Hint type="secondary">{t('dontWorry')}</Hint>
        <SelectWrapper
          size="large"
          placeholder={t('placeholderLanguage')}
          loading={!defaultLanguages}
          defaultValue={defaultLanguage || undefined}
          error={errors.defaultLanguage}
          touched={touched.defaultLanguage}
          {...getFieldProps('defaultLanguage')}
        >
          {defaultLanguages &&
            defaultLanguages.map((language: DefaultLanguage) => (
              <Option key={language.value} value={language.value}>
                {t(language.value)}
              </Option>
            ))}
        </SelectWrapper>
        <Hint type="secondary">{t('defaultLanguage')}</Hint>
        <StyledButton
          type="primary"
          size="large"
          htmlType="submit"
          disabled={!defaultLanguages}
          block
        >
          {t('next')}
        </StyledButton>
      </AssistantForm>
    </AssistantWrapper>
  );
}

export default Assistant;
