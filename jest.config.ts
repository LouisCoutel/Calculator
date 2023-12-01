/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
     globals: {
      "ts-jest": {
         tsConfigFile: "tsconfig.json"
       },
       TextEncoder: require("util").TextEncoder,
       TextDecoder: require("util").TextDecoder
   },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default config