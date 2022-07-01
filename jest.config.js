// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.tsx'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
