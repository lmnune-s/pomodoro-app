module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true
      }
    },
    coverageReporters: ['html', 'text-summary'],
  };
  