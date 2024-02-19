import { type KeyboardEvent } from 'react';

export function replaceComma(text: string) {
  return text.replace(',', '.');
}

export function removeLeadingDot(text: string) {
  return text.replace(/^\.+/, '');
}

export function removeDot(text: string) {
  return text.replace(/\./g, '');
}

export function isNumber(text: string) {
  const regex = /^[0-9.]*$/;
  const dots = text.match(/\./g) || [];

  return regex.test(text) && dots.length <= 1;
}

export function isValidLength(text: string, decimalPlaces: number) {
  const [, fraction] = text.split('.');

  return fraction ? fraction.length <= decimalPlaces : true;
}

export function ignoreChars(e: KeyboardEvent) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
  }
}
