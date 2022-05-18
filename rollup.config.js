import typescript from 'rollup-plugin-typescript2';

import packageSettings from './package.json';

export default {
  input: 'src/wert-module.tsx',
  output: [
    {
      file: packageSettings.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    typescript({
      // objectHashIgnoreUnknownHack: true,
    })
  ],
  external: ['react', 'react-dom']
}
