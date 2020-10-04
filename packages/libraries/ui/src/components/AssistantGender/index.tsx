import React from 'react';
import { RadioChangeEvent } from 'antd/es/radio';
import { LargeRadioButton, AssistantGenderRadioGroup } from './styles';

type Options = Array<{
  value: string;
  icon: React.ReactNode;
}>;

type Props = {
  color: string;
  onChange: (value: string) => void;
  options: Options;
  value: string;
};

function AssistantGender({ options, color, value, onChange }: Props) {
  function handleChange(e: RadioChangeEvent): void {
    onChange(e.target.value);
  }
  return (
    <AssistantGenderRadioGroup defaultValue={value} onChange={handleChange}>
      {options.map(({ value: optionValue, icon }) => (
        <LargeRadioButton
          value={optionValue}
          key={optionValue}
          checked={value === optionValue}
          $color={color}
        >
          {icon}
        </LargeRadioButton>
      ))}
    </AssistantGenderRadioGroup>
  );
}

export default AssistantGender;
