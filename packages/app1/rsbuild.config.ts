import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        app2: 'app2@http://localhost:3002/mf-manifest.json',
        app3: 'app3@http://localhost:3003/mf-manifest.json',
      },
    }),
  ],
  server: {
    port: 3001,
  }
});
