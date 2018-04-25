# vue-keyboard-widget

依赖
- Vue 2
- Vuex
- ['vue-touch-keyboard'](https://github.com/icebob/vue-touch-keyboard)

在使用时发现`vue-touch-keyboard`只支持原生input，对于ElementUI封装后的el-input无法进行绑定，于是为了方便开发，自己写了两个组件分别对el-input和`vue-touch-keyboard`进行了封装，并结合了vuex实现任意组件内对keyboard的调用

### Store
利用vuex存放
- showKeyboard： 键盘显示状态 true-显示 false-隐藏
- inputTarget： input的事件对象

### MyInputWidget
包含了原生input和textarea，注册为全局组件方便调用，在focus时会触发事件，调用方法修改store中的数据

### TouchKeyboard
注册在app根文件，通过监听store中的数据来控制键盘显示/隐藏，并且自己添加了pc/移动端的拖拽
