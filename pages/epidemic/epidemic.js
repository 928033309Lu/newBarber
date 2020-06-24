// pages/epidemic/epidemic.js
import http from "../../utils/api"
const App = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    china_body: null,
    navList: [
      {
        name: '国内疫情',
        id: 1
      },
      {
        name: '国外疫情',
        id: 2
      },
      {
        name: '热搜新闻',
        id: 3
      },
      {
        name: '疫情每日历史概要',
        id: 4
      },
    ],
    active: 1

  },
  onChangeNav (event) {
    let item = event.currentTarget.dataset.item
    this.setData({
      active: item.id
    })
  },
  // 返回首页
  onComeBack () {
    wx.navigateTo({
      url:"/pages/homepage/homepage"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.getEpidemic({}, (res)=>{
      if (res.showapi_res_code != 0) {
        return
      }
      let china_body = res.showapi_res_body
      china_body.todayDetailList = china_body.todayDetailList.map(item => {
        item.visible = false
        return item
      })
      console.log(china_body)
      this.setData({
        china_body
      })
    }, (err) => {
      console.log(err)
    })
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