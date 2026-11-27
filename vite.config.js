import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import path from 'path';

export default ({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/landing-nothing/' : '/',
  build: { assetsInlineLimit: 0 },
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': [],
        },
      },
    }),
    pug({ root: './src' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
});
