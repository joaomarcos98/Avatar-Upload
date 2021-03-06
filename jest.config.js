// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts(x)?",
        "!src/**/*.stories.tsx",
        "!src/@types/*",
        "!src/App.tsx",
        "!src/main.tsx",
        "!src/styles/*"
    ],
    modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.svg$": "<rootDir>/.jest/svgTransform.js"
    },
    moduleNameMapper: {
        "@components/(.*)": "<rootDir>/src/components/$1",
        "@assets/(.*)": "<rootDir>/src/assets/$1",
        "@utils/(.*)": "<rootDir>/src/utils/$1"
    }
}
