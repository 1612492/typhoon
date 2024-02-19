import './style.css';
import { type InputHTMLAttributes, useCallback, useEffect } from 'react';

import {
  ignoreChars,
  isNumber,
  isValidLength,
  removeDot,
  removeLeadingDot,
  replaceComma,
} from './utils';

const DEFAULT_DECIMAL_PLACES = 9;

type NumberInputProps = {
  decimalPlaces?: number;
  onChangeText?: (text: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function NumberInput({
  decimalPlaces = DEFAULT_DECIMAL_PLACES,
  onChangeText,
  value,
  ...props
}: NumberInputProps) {
  const validate = useCallback(
    (text: string) => {
      let formatedText = replaceComma(text);

      formatedText = decimalPlaces === 0 ? removeDot(formatedText) : removeLeadingDot(formatedText);

      if (onChangeText && isNumber(formatedText) && isValidLength(formatedText, decimalPlaces)) {
        onChangeText(formatedText);
      }
    },
    [decimalPlaces, onChangeText]
  );

  useEffect(() => {
    function onCopy(e: ClipboardEvent) {
      const clipboardData = e.clipboardData?.getData('text');

      if (onChangeText && clipboardData && !isNumber(clipboardData)) {
        onChangeText('');
      }
    }

    document.addEventListener('paste', onCopy);

    return () => document.removeEventListener('paste', onCopy);
  }, [onChangeText]);

  return (
    <input
      autoComplete="off"
      inputMode="decimal"
      pattern="/^[0-9.]*$/"
      onKeyDown={ignoreChars}
      type="number"
      value={value ?? ''}
      onChange={(e) => validate(e.target.value)}
      {...props}
    />
  );
}
