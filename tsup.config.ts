import { defineConfig } from 'tsup';

// no external package
// koa, koa-router, koa-bodyparser, koa2-cors
const noExternalModules: (string | RegExp)[] = [/^koa2?/];

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './build',
  splitting: true,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
  noExternal: noExternalModules,
  skipNodeModulesBundle: false
});
