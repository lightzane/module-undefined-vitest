import { it, expect } from 'vitest';
import { test } from './main';

it('should return module filename', () => {
  expect(test()).toBeDefined();
  // npm start gives test() a defined value
});
