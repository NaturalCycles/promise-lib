## @naturalcycles/promise-lib

> Useful promise functions, inspired by [Bluebird](https://github.com/petkaantonov/bluebird), [p-map](https://github.com/sindresorhus/p-map), [p-props](https://github.com/sindresorhus/p-props)

[![npm](https://img.shields.io/npm/v/@naturalcycles/promise-lib/latest.svg)](https://www.npmjs.com/package/@naturalcycles/promise-lib)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://circleci.com/gh/NaturalCycles/promise-lib.svg?style=shield&circle-token=cbb20b471eb9c1d5ed975e28c2a79a45671d78ea)](https://circleci.com/gh/NaturalCycles/promise-lib)
[![Maintainability](https://api.codeclimate.com/v1/badges/2564d58cefeeb31ce6dc/maintainability)](https://codeclimate.com/github/NaturalCycles/promise-lib/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2564d58cefeeb31ce6dc/test_coverage)](https://codeclimate.com/github/NaturalCycles/promise-lib/test_coverage)

# Why

- `bluebird` is outdated
- `p-props` requires separate `@types/p-props` which has issues
- Both `p-map` and `p-props` do `export default`, which is not IDE-friendly. IDEs don't
  automatically suggest to import these functions

# Features

- First-class Typescript support, typings included and working
- IDE-friendly, IDE automatically suggest to import from proper place
- Bundled as `es2018`, with native async/await, no transpilation
- Based (almost copy-pasted) on battle-tested implementations (`p-map`), tests included

# Packaging, support

CommonJS, es2018.

NodeJS **latest** LTS.

Browser - works for browsers with native async/await support, Babel transpilation to be
tested...

Follows SemVer. Will start with `0.x` until stabilization in `1.0`.
