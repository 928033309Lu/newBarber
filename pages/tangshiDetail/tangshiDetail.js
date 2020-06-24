// pages/tangshiDetail/tangshiDetail.js
import http from "../../utils/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData: null
  },
  onSearch (str) {
    http.getTangshiSearch({
      keyword: str,
      pagesize: 4,
      pagenum: 1
    }, res => {
      console.log(res)
      if (res.status != 0) return
    }, err => {

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    if (options && options.value) {
      this.onSearch(options.value)
    }
    if (options && options.data) {
      let item = JSON.parse(options.data)
      http.getTangshiDetail({ detailid: item.detailid }, res => {
        if (res.status != 0) return
        // console.log(res)
        this.setData({
          detailsData: res.result
        })
      }, err => {})
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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