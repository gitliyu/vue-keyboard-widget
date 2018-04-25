<template>
  <div id="app">
    <demo-page></demo-page>
    <touch-keyboard></touch-keyboard>
  </div>
</template>

<script>
import DemoPage from './components/DemoPage.vue'
import TouchKeyboard from './components/TouchKeyboard.vue';

export default {
  name: 'App',
  components: {
    DemoPage,
    TouchKeyboard
  }
}
</script>
