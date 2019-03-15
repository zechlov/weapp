// components/topbar/topbar.js
const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    //默认值  默认显示左上角
    navbarData: {
      return: 1,
      // 背景颜色
      color: '#ffffff'
    },
  },
  methods: {
  // 返回上一页面
    _return() {
      wx.navigateBack()
    }
  }

}) 
