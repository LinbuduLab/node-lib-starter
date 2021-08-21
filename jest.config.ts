/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover", "html"],
  maxWorkers: "80%",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "ts", "json"],
  preset: "ts-jest",
  globals: { "ts-jest": { tsconfig: "<rootDir>/tsconfig.spec.json" } },
  displayName: "PROJECT",
  testEnvironment: "node",
  roots: ["<rootDir>"],
};
