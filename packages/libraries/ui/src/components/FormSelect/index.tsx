import React, { ReactNode, FocusEvent } from 'react';
import { Form, Select, Tooltip, Grid } from 'antd';
const { useBreakpoint } = Grid;

type Props = {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  touched?: boolean;
  loading?: boolean;
  size?: 'large' | 'middle' | 'small';
  className?: string;
  label?: string;
  children: ReactNode;
  onChange: (e: { target: { value: string; name: string } }) => void;
  onBlur: (e: { target: { name: string } }) => void;
};

function FormInput({
  name,
  placeholder,
  defaultValue,
  error,
  touched,
  loading,
  size,
  className,
  label,
  children,
  onChange,
  onBlur
}: Props) {
  const screens = useBreakpoint();

  const handleChange = (value: string) => {
    onChange({ target: { value, name } });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.name = name;
    onBlur(e);
  };

  return (
    <Form.Item
      hasFeedback
      label={label}
      labelCol={{ span: 24 }}
      className={className}
      validateStatus={touched && error ? 'error' : ''}
    >
      <Tooltip
        title={touched && error}
        color="red"
        placement={screens.sm ? 'right' : 'top'}
        overlayStyle={{ whiteSpace: 'pre-line' }}
      >
        <Select
          loading={loading}
          defaultValue={defaultValue}
          size={size}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {children}
        </Select>
      </Tooltip>
    </Form.Item>
  );
}

export default FormInput;
