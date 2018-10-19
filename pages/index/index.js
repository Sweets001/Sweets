//index.js
//获取应用实例
const app = getApp()
Page({

  //跳转点餐页
  tapName: function () {
    wx.navigateTo({
      url: '../startOrdering/startOrdering'
    })
  }
})
