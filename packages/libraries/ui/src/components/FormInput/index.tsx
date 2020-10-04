import React, { ChangeEvent } from 'react';
import { Form, Input, Tooltip, Grid } from 'antd';
const { useBreakpoint } = Grid;

type Props = {
  name: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  error?: string;
  password?: boolean;
  touched?: boolean;
  size?: 'large' | 'middle' | 'small';
  addonBefore?: string;
  className?: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  name,
  value,
  maxLength,
  placeholder,
  error,
  password,
  touched,
  size,
  addonBefore,
  className,
  label,
  onChange,
  onBlur
}: Props) {
  const InputComponent = password ? Input.Password : Input;
  const screens = useBreakpoint();

  return (
    <Form.Item
      hasFeedback
      labelCol={{ span: 24 }}
      label={label}
      className={className}
      validateStatus={touched && error ? 'error' : ''}
    >
      <Tooltip
        title={touched && error}
        color="red"
        placement={screens.sm ? 'right' : 'top'}
        overlayStyle={{ whiteSpace: 'pre-line' }}
      >
        <InputComponent
          name={name}
          size={size}
          addonBefore={addonBefore}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Tooltip>
    </Form.Item>
  );
}

export default FormInput;
