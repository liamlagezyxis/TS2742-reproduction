# Basic Reproduction for TS2742

## Description

See `./apps/app-1/src/trpc/trpc.ts` for the issue.

```
The inferred type of 'router' cannot be named without a reference to '.pnpm/@types+express-serve-static-core@4.19.1/node_modules/@types/express-serve-static-core'. This is likely not portable. A type annotation is necessary.ts(2742)
```


## Getting Started / Reproduction

`pnpm install` from the root directory.

`npx turbo run dev` from either `./apps/app-1` or root directory.

## Issue Documentation

[TS2742](https://typescript.tv/errors/#ts2742)

## Related Issues

[The inferred type of "X" cannot be named without a reference to "Y". This is likely not portable. A type annotation is necessary.](https://github.com/microsoft/TypeScript/issues/42873#issuecomment-2065572017)