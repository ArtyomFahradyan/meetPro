import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Steps } from 'antd';
import { navigationStatusAtom } from 'recoil/navigation';
import { NavStep } from './styles';

const steps = [
  { title: 'assistant', route: '' },
  { title: 'customizeWidget', route: 'customize' },
  { title: 'yourAccount', route: 'account' }
];

function Navigation() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const stepStatuses = useRecoilValue(navigationStatusAtom);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentStep = steps.findIndex((step) => step.route === location.pathname.split('/')[1]);
    setCurrentStep(currentStep);
  }, [location]);

  const changeStep = (current: number) => {
    navigate(`/${steps[current].route}`);
  };

  const evaluateStatus = (isFinished?: boolean) => {
    if (isFinished === true) return 'finish';
    if (isFinished === false) return 'error';
    return 'wait';
  };

  return (
    <Steps direction="vertical" current={currentStep} onChange={changeStep}>
      {steps.map((step, index) => (
        <NavStep
          key={step.route}
          title={t(step.title)}
          status={currentStep !== index ? evaluateStatus(stepStatuses[index]) : undefined}
        />
      ))}
    </Steps>
  );
}

export default Navigation;
