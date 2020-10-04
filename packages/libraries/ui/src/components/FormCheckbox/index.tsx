import React from 'react';
import { Checkbox } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxError, FormItem } from './styles';

type Props = {
  name: string;
  value: boolean;
  error?: string;
  touched?: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
  onBlur: (e: CheckboxChangeEvent) => void;
  children: React.ReactNode;
};

function FormCheckbox({ name, value, error, touched, onChange, onBlur, children }: Props) {
  const errorMessage = (
    <AnimatePresence>
      {touched && error ? (
        <CheckboxError initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {error}
        </CheckboxError>
      ) : null}
    </AnimatePresence>
  );

  const handleChange = (event: CheckboxChangeEvent) => {
    onBlur(event);
    onChange(event);
  };

  return (
    <FormItem extra={errorMessage}>
      <Checkbox name={name} onChange={handleChange} checked={value}>
        {children}
      </Checkbox>
    </FormItem>
  );
}

export default FormCheckbox;
