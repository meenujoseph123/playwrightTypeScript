module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Or 'jsdom' if you're testing a React app
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Use ts-jest to handle TypeScript files
    '^.+\\.js$': 'babel-jest',     // Handle .js files with Babel (if necessary)
  },
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-output', outputName: 'test-results.xml' }],
  ],
};
