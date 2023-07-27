import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    outDir: "dist",
    entry: ['src/index.ts'],
    splitting: false,
    clean: true,
    dts: true,
    sourcemap: !options.watch,
    minify: !options.watch,
  };
});
