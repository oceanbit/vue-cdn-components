import { createApp, DefineComponent } from 'vue';
import App from './App.vue';
import './main.css';

import { externalCSS, externalJavaScript } from './helpers';

window['VUE'] = require('vue');
import * as cdnBase from '@vue-cdn/vue-cdn-base';
window['CDN-BASE'] = cdnBase;

const app = createApp(App);

app.mount('#app');

window['onLogin'] = async () => {
  const module: {
    default: Array<{
      Component: DefineComponent
    }>
  } = await externalJavaScript('http://localhost:3000/components/vue-cdn-components/vue-cdn-components.umd.js');
  externalCSS('http://localhost:3000/components/vue-cdn-components/vue-cdn-components.css');
  const compArr = module.default;

  return compArr.map(compObj => {
    const comp = compObj.Component
    app.component(comp.name, comp)
    return comp.name;
  })
};
