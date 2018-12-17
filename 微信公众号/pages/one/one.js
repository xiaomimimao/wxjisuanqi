//index.js
//获取应用实例
const app = getApp()
Page({
  data: { gongshi: '' ,
          morenzhi:''
          
  },
  gongshiinput: function (e) {
    this.setData({
      gongshi: e.detail.value
    })
  },
  zhi: function () {
    var that=this
    wx.showModal({
      title: 'mimi',
      content: this.data.gongshi,
      success:function (res){
        console.log(res)
        if (res.confirm) {
          that.setData({
            morenzhi: that.data.gongshi
          })
          
        }
      }


    })
  }
})