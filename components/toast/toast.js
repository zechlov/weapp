// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 延迟关闭时间
    delay: {
      type: Number,
      value: 1200
    },
    // 是否显示
    show: {
      type: Boolean,
      value: false
    },
    // 显示内容
    message: {
      type: String,
      value: '',
      observer(newV, oldV) {
        let { delay } = this.properties

        this.setData({
          show: true
        })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => this.hide(), delay)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.properties.message = ''
      this.setData({
        show: false
      })

      this.triggerEvent('hide', {})
    }

  }
})
