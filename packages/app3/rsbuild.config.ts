import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app3',
      remotes: {
        app2: 'app2@http://localhost:3002/mf-manifest.json',
      },
      exposes: {
        './TestButton': './src/TestButton.tsx',
      },
    }),
  ],
  server: {
    port: 3003
  }
});
