import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm', 'iife'],
    entry: ['./src/index.ts'],
    globalName: 'bsnValidator',
    dts: true,
    shims: true,
    clean: true,
    minify: true,
    skipNodeModulesBundle: true,
});
