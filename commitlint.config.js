/** @format */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feature', 'fix', 'chore', 'ci', 'build', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'subject-case': [
      1,
      'always',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case'],
    ],
  },
};
