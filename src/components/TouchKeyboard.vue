<template>
  <div class="touch-keyboard-widget pt-2" v-if="visible" @mousedown="onDrag" @touchstart="onTouchDrag">
    <vue-touch-keyboard class="p-1"
                        :layout="layout"
                        :cancel="hide"
                        :accept="hide"
                        :input="input"
                        :change="onChange"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        layout: 'normal',
        input: null,
        options: {
          useKbEvents: false,
          preventClickEvent: false
        }
      }
    },
    computed: {
      showKeyboard: function () {
        return this.$store.state.showKeyboard;
      },
      inputTarget: function () {
        return this.$store.state.inputTarget;
      }
    },
    methods: {
      onDrag (e) {
        let target = e.currentTarget;
        let disY = e.clientY - target.offsetTop;
        document.onmousemove = ev => {
          let top = ev.clientY - disY;
          let maxTop = window.innerHeight - target.offsetHeight;
          top = top > maxTop ? maxTop : top;
          target.style.top = top + 'px';
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      },
      onTouchDrag (e) {
        let target = e.currentTarget;
        let disY = e.touches[0].clientY - target.offsetTop;
        document.ontouchmove = ev => {
          let top = ev.touches[0].clientY - disY;
          let maxTop = window.innerHeight - target.offsetHeight;
          top = top > maxTop ? maxTop : top;
          target.style.top = top + 'px';
        };
        document.ontouchend = () => {
          document.ontouchmove = null;
          document.ontouchend = null;
        };
      },
      show () {
        if (this.showKeyboard && this.inputTarget) {
          this.input = this.inputTarget;
          this.layout = this.inputTarget.dataset.layout;
          this.visible = true
        }
      },
      hide () {
        this.visible = false;
        this.$store.commit('_toggleKeyboard', {
          bol: false,
          target: null
        })
      },
      onChange () {
        this.input.dispatchEvent(new Event('input', {bubbles: true}));
      }
    },
    watch: {
      showKeyboard: function () {
        this.show();
      },
      inputTarget: function () {
        this.show();
      }
    }
  }
</script>