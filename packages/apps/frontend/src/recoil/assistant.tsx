import { atom, selector } from 'recoil';
import theme from 'theme';

export const assistantNameAtom = atom<string>({
  key: 'assistantName',
  default: ''
});

export const assistantDefaultLanguageAtom = atom<string>({
  key: 'assistantDefaultLanguage',
  default: ''
});

export const assistantColorAtom = atom<string>({
  key: 'assistantColor',
  default: theme.purple
});

export const assistantGenderAtom = atom<string>({
  key: 'assistantGender',
  default: 'female'
});

export const assistantPatternAtom = atom<string>({
  key: 'assistantPattern',
  default: 'pattern-0'
});

export const assistantSelector = selector({
  key: 'assistantSelector',
  get: ({ get }) => {
    const name = get(assistantNameAtom);
    const defaultLanguage = get(assistantDefaultLanguageAtom);
    const color = get(assistantColorAtom);
    const gender = get(assistantGenderAtom);
    const pattern = get(assistantPatternAtom);
    return {
      name,
      color,
      gender,
      pattern,
      defaultLanguage
    };
  }
});
