<template>
  <div :class="type === 'textarea' ? 'el-textarea' : 'el-input'">
    <textarea v-if="type === 'textarea'" v-model="inputValue" class="el-textarea__inner" data-layout="compact"
           :placeholder="placeholder" :rows="rows" @focus="showKeyboard"></textarea>
    <input v-else v-model="inputValue" class="el-input__inner" data-layout="compact"
           :placeholder="placeholder" :type="type" :rows="rows" @focus="showKeyboard" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputValue: ''
      }
    },
    props: {
      value: [String, Number],
      placeholder: String,
      type: {
        type: String,
        default: 'text'
      },
      rows: {
        type: Number,
        default: 2
      }
    },
    mounted () {
      this.inputValue = this.value;
    },
    methods: {
      showKeyboard (e) {
        this.$store.commit('_toggleKeyboard', {
          bol: true,
          target: e.target
        })
      }
    },
    watch: {
      value: function (val) {
        this.inputValue = val;
      },
      inputValue: function (val) {
        this.$emit('input', val);
      }
    }
  }
</script>

<style>
  /*
  ** element ui 的部分css
  ** 无视即可
  */
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    margin-top: 30px;
  }

  .el-textarea {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
    margin-top: 30px;
  }

  .el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
</style>