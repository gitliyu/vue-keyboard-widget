<template>
  <div class="demo-page">
    <my-input v-model="name" placeholder="请输入姓名"></my-input>{{name}}
    <my-input v-model="password" placeholder="请输入密码" type="password"></my-input>
    <my-input v-model="message" placeholder="随便写点啥" type="textarea" rows="3"></my-input>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        name: null,
        password: null
      }
    },
    methods: {}
  }
</script>

<style>
.demo-page{
  width: 50%;
  margin: 0 auto;
}
</style>