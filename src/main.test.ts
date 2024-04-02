import { test } from './main';

it('should return module filename', () => {
  expect(test()).toBeDefined();
  // npm start gives test() a defined value
});

// ! Will be executed ONLY by jest (refer to "npm test" command in package.json)
