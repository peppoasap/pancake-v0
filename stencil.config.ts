import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

import tailwindConfig from './tailwind.config.js';

export const config: Config = {
  namespace: 'pancake-v0',
  globalStyle: './global-style.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    tailwind({
      tailwindConf: tailwindConfig,
    }),
    tailwindHMR(),
  ],
};
