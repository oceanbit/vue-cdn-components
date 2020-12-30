module.exports = {
  displayName: 'streampod-base',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/libs/streampod-base',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': { tsConfig: 'libs/streampod-base/tsconfig.spec.json' },
  },
};
