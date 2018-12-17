//index.js
//获取应用实例
const app = getApp()
Page({
  data: {gongshi: ''},
  gongshiinput:function(e)
  {
    this.setData({
      gongshi: e.detail.value
    })
  },
  zhi:function() {
    wx.showModal({
    title: 'mimi',
    content: this.data.gongshi,
    

  })
  }
})