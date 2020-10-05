import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { AssistantGender, RadioPalette, PaletteType } from '@meet/ui';
import { ReactComponent as Pattern0 } from '@meet/assets/patterns/pattern-0.svg';
import { ReactComponent as Pattern1 } from '@meet/assets/patterns/pattern-1.svg';
import { ReactComponent as Pattern2 } from '@meet/assets/patterns/pattern-2.svg';
import { ReactComponent as Pattern3 } from '@meet/assets/patterns/pattern-3.svg';
import { ReactComponent as Pattern4 } from '@meet/assets/patterns/pattern-4.svg';
import { ReactComponent as Pattern5 } from '@meet/assets/patterns/pattern-5.svg';
import { ReactComponent as Pattern6 } from '@meet/assets/patterns/pattern-6.svg';
import { ReactComponent as HooryFemale } from '@meet/assets/icons/hoory-female.svg';
import { ReactComponent as HooryMale } from '@meet/assets/icons/hoory-male.svg';
import { stepStatusSelector } from 'recoil/navigation';
import { assistantColorAtom, assistantGenderAtom, assistantPatternAtom } from 'recoil/assistant';
import theme from 'theme';
import { CustomizeWrapper, NextButton, Heading } from './styles';

const genderList = [
  { value: 'female', icon: <HooryFemale /> },
  { value: 'male', icon: <HooryMale /> }
];

const colorList = [
  { value: theme.purple },
  { value: theme.green },
  { value: theme.yellow },
  { value: theme.red },
  { value: theme.violet },
  { value: theme.blue },
  { value: theme.black }
];
const patternList = [
  { value: 'pattern-0', pattern: <Pattern0 /> },
  { value: 'pattern-1', pattern: <Pattern1 /> },
  { value: 'pattern-2', pattern: <Pattern2 /> },
  { value: 'pattern-3', pattern: <Pattern3 /> },
  { value: 'pattern-4', pattern: <Pattern4 /> },
  { value: 'pattern-5', pattern: <Pattern5 /> },
  { value: 'pattern-6', pattern: <Pattern6 /> }
];

function Customize() {
  const { t } = useTranslation('customize');

  const [gender, setGender] = useRecoilState(assistantGenderAtom);
  const [color, setColor] = useRecoilState(assistantColorAtom);
  const [pattern, setPattern] = useRecoilState(assistantPatternAtom);
  const setStepStatusValue = useSetRecoilState(stepStatusSelector(1));
  const navigate = useNavigate();
  const handleSubmit = () => {
    setStepStatusValue(true);
    navigate('/account');
  };

  return (
    <CustomizeWrapper>
      <Heading level={4}>{t('assistantGender')}</Heading>
      <AssistantGender options={genderList} color={color} value={gender} onChange={setGender} />
      <Heading level={4}>{t('colorScheme')}</Heading>
      <RadioPalette
        options={colorList}
        onChange={setColor}
        value={color}
        type={PaletteType.COLOR}
      />
      <Heading level={4}>{t('pattern')}</Heading>
      <RadioPalette
        options={patternList}
        onChange={setPattern}
        value={pattern}
        type={PaletteType.PATTERN}
      />
      <NextButton type="primary" size="large" onClick={handleSubmit}>
        {t('next')}
      </NextButton>
    </CustomizeWrapper>
  );
}

export default Customize;
