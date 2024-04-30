/* eslint-disable */
export default {
  displayName: 'lib1',
  preset: './jest.preset.js',
  coverageDirectory: './coverage/lib1',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
};
