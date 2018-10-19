// pages/startOrdering/startOrdering.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 菜单选中状态
    activeItem: 0,
    // 菜单类型：1、饭食；2、面食
    menuTypeList: [{
      id: 1,
      type: 1,
      typeIcon: '../../images/food-icon1.png',
      text: '饭食'
    },
    {
      id: 2,
      type: 2,
      typeIcon: '../../images/food-icon2.png',
      text: '面食'
    },
    ],
    // 对应菜单列表
    menuList: [{
      id: 1,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 2,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 3,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 4,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 5,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 6,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }, {
      id: 7,
      foodImg: '../../images/menu-img1.png',
      foodName: '宫保鸡丁',
      foodDesc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍'
    }],
    // 列表高度
    listHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.header-bg').boundingClientRect(function (rect) {
      that.setData({
        listHeight: (wx.getSystemInfoSync().windowHeight - rect.height) * 2
      })
    }).exec();
  },
  // tab切换
  tabToggle: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      activeItem: index
    });
  },
  // 提交点餐
  submitOrdering: function (e) {
    let item = e.currentTarget.dataset.item;
    wx.setStorage({
      key: 'orderItem',
      data: item,
      success: function(){
        wx.navigateTo({
          url: '../submitOrder/submitOrder',
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})