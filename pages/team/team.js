// pages/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '18012787423'
  },
  onLoad() {
    wx.login({
      success(res) {
        console.log(res)
      }
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: '18012787423' // 仅为示例，并非真实的电话号码
    })
  }
})