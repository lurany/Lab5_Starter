// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone number accepts dashed format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number accepts parentheses format', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('phone number rejects missing one digit', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

test('phone number rejects no separators', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('email accepts username with numbers', () => {
  expect(isEmail('name123@ucsd.edu')).toBe(true);
});

test('email accepts UCSD email', () => {
  expect(isEmail('lurany@ucsd.edu')).toBe(true);
});

test('email rejects missing at symbol', () => {
  expect(isEmail('name123ucsd.edu')).toBe(false);
});

test('email rejects missing dot before extension', () => {
  expect(isEmail('name123@ucsdedu')).toBe(false);
});

test('password accepts uppercase letters and numbers', () => {
  expect(isStrongPassword('LURANY02')).toBe(true);
});

test('password accepts underscore', () => {
  expect(isStrongPassword('Lurany_02')).toBe(true);
});

test('password rejects starting with number and symbol', () => {
  expect(isStrongPassword('123!')).toBe(false);
});

test('password rejects special character', () => {
  expect(isStrongPassword('Lurany!')).toBe(false);
});

test('date accepts two digit month and day', () => {
  expect(isDate('05/05/2026')).toBe(true);
});

test('date accepts one digit month and day', () => {
  expect(isDate('5/5/2026')).toBe(true);
});

test('date rejects dashes and short year', () => {
  expect(isDate('05-05-26')).toBe(false);
});

test('date rejects short year', () => {
  expect(isDate('05/05/26')).toBe(false);
});

test('hex color accepts three character hashtag code', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('hex color accepts six character code without hashtag', () => {
  expect(isHexColor('abc123')).toBe(true);
});

test('hex color rejects invalid letters', () => {
  expect(isHexColor('#egg')).toBe(false);
});

test('hex color rejects four character code', () => {
  expect(isHexColor('#abcd')).toBe(false);
});