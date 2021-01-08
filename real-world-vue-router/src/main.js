// é possível passar componentes de forma global. Primeiro importe o componente vá para linha 38
// import BaseIcon from '@/components/BaseIcon.vue';
import Vue from 'vue';
// esses sao imports para fazer o registro global de componentes
import upperFirst from 'lodash/upperFirst'; // instalar o lodash para funcionar
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Esse é um método do Vue para registrar componentes de forma global no caso de que haja muitos
// componentes. Porém esses componentes precisam comecar com Base para funcionar
const requireComponent = require.context(
  './components',
  false, // caso for procurar em subdiretórios trocar para true
  /Base[A-Z]\w+\.(vue|js)$/, // se ao inves de Base quiser usar outro nome so mudar aqui
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

// para passar globalmente precisa passar no nome do componente e o componente em si
// Vue.component('BaseIcon', BaseIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
