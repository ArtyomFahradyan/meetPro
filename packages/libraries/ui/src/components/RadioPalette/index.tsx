import React from 'react';
import { Grid } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { RadioPaletteWrapper, RadioItem, PaletteItem, CheckIconWrapper, CheckIcon } from './styles';
const { useBreakpoint } = Grid;

export enum PaletteType {
  PATTERN = 'pattern',
  COLOR = 'color'
}

type Options = {
  options: Array<{ value: string; pattern?: React.ReactNode }>;
  onChange: (value: string) => void;
  value: string;
  type: PaletteType;
};

function RadioPalette({ options, onChange, value, type }: Options) {
  const screens = useBreakpoint();

  // TODO: Add functionality to switch between palette options with arrow keys
  return (
    <RadioPaletteWrapper $breakpoints={screens}>
      {options.map(({ value: optionValue, pattern }) => {
        return (
          <RadioItem key={optionValue}>
            <PaletteItem
              $value={optionValue}
              $type={type}
              tabIndex={0}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={() => {
                onChange(optionValue);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') onChange(optionValue);
              }}
            >
              {type === PaletteType.PATTERN && pattern}
              <AnimatePresence>
                {optionValue === value && (
                  <CheckIconWrapper
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckIcon $type={type} />
                  </CheckIconWrapper>
                )}
              </AnimatePresence>
            </PaletteItem>
          </RadioItem>
        );
      })}
    </RadioPaletteWrapper>
  );
}

export default RadioPalette;
