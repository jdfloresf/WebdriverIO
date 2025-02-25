// eslint.config.js
import { configs as wdioConfigs } from 'eslint-plugin-wdio';

export default [
  {
    files: ['./test/specs/**/*.js'], // Ajusta según los archivos que desees linting
    languageOptions: {
      ecmaVersion: 'latest',
    },
    plugins: {
      wdio: wdioConfigs['flat/recommended'],
    },
    rules: {
      // Puedes agregar reglas adicionales o sobrescribir las existentes aquí
    },
  },
];
