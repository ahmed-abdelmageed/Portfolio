import legacy from '@vitejs/plugin-legacy';
import browserslist from 'browserslist';

export default {
  plugins: [
    legacy({
      targets: browserslist.loadConfig({}) || ['defaults']
    })
  ]
};
