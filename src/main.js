// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueTouchKeyboard from 'vue-touch-keyboard';
import 'vue-touch-keyboard/dist/vue-touch-keyboard.css';
import MyInput from './components/MyInputWidget.vue';

Vue.use(VueTouchKeyboard);

Vue.config.productionTip = false;

Vue.component('my-input', MyInput);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
