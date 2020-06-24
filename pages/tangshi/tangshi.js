// pages/tangshi/tangshi.js
import http from "../../utils/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [],
    value: ''
  },
  bindKeyInput (e) {
    this.setData({
      value: e.detail.value
    })
  },
  onSearch () {
    let str = this.data.value
    wx.navigateTo({
      url: '/pages/tangshiDetail/tangshiDetail?value=' + JSON.stringify(str)
    })
  },
  onClickList (event) {
    let item = event.currentTarget.dataset.item
    // console.log(item)
    wx.navigateTo({
      url: '/pages/tangshiDetail/tangshiDetail?data=' + JSON.stringify(item)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    http.getTangshiList({}, res => {
      // console.log(res)
      if (res.status != 0) return

      this.setData({
        menuList: res.result
      })
    },  err => {

    })
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