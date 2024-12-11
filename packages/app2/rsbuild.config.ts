import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app2',
      exposes: {
        './Button': './src/Button.tsx',
        './TestContext': './src/TestContext.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3002,
  }
});
