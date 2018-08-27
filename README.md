# vue-keyboard-widget

Demo: ['https://www.liyu.fun/vue-keyboard-widget'](https://www.liyu.fun/vue-keyboard-widget)

基于['vue-touch-keyboard'](https://github.com/icebob/vue-touch-keyboard)的封装，依赖
- Vue 2
- Vuex
- vue-touch-keyboard

于是为了方便开发，自己写了两个组件分别对`input`和`vue-touch-keyboard`进行了封装，并结合了vuex实现任意组件内通过input focus触发调用keyboard

### Store
利用vuex存放
- showKeyboard： 键盘显示状态 true-显示 false-隐藏
- inputTarget： input的事件对象

### MyInputWidget
包含了原生input和textarea，注册为全局组件方便调用，在focus时会触发事件，调用方法修改store中的数据

### TouchKeyboard
注册在app根文件，通过监听store中的数据来控制键盘显示/隐藏，并且自己添加了pc/移动端的拖拽
> 需要注意的是，`vue-touch-keyboard`组件无法触发v-model，只能改变input内的值，需要手动绑定change事件，而且对于`Element`的`el-input`这样封装过的组件对象是无法识别的 
