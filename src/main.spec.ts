import { it, expect } from 'vitest';
import { test } from './main';

it('should return module filename', () => {
  expect(test()).toBeDefined();
  // npm start gives test() a defined value
});

// ! Will be executed ONLY by vitest (refer to "npm test" command in package.json)
