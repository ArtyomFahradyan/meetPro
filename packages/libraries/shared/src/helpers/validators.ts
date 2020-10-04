import { default as isEmailValid } from 'validator/es/lib/isEmail';
import { default as isUrlValid } from 'validator/es/lib/isURL';

const UPPERCASE_PATTERN = /^(?=.*[A-Z])/;
const LOWERCASE_PATTERN = /^(?=.*[a-z])/;
const DIGIT_PATTERN = /^(?=.*\d)/;

function isEmpty(value: string): boolean {
  return !value.trim();
}

function isEmail(value: string): boolean {
  return isEmailValid(value);
}

function includesUppercase(value: string): boolean {
  return UPPERCASE_PATTERN.test(value);
}

function includesLowercase(value: string): boolean {
  return LOWERCASE_PATTERN.test(value);
}

function includesDigit(value: string): boolean {
  return DIGIT_PATTERN.test(value);
}

function isMinLength(value: string, length: number): boolean {
  return value.length >= length;
}

function isEqual(first: string, second: string): boolean {
  return first === second;
}

function isUrl(value: string): boolean {
  return isUrlValid(value, {
    protocols: ['https'],
    require_protocol: true,
    allow_underscores: true
  });
}

export default {
  isEmpty,
  isEmail,
  includesUppercase,
  includesLowercase,
  includesDigit,
  isMinLength,
  isEqual,
  isUrl
};
