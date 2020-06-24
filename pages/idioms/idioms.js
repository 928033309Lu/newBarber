// pages/idioms/idioms.js
import http from "../../utils/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgData: null,
    code: 2,
    page: 1,
    rows: 10,
    keyword: '',
    radioList: [
      {
        checked: true,
        code: 2,
        value: '根据成语查注释'
      },
      // {
      //   checked: false,
      //   code: 1,
      //   value: '根据关键字查成语'
      // },
    ]
  },
  radioChange(event) {
    let code = event.detail.value
    this.setData({
      code
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  onSearch () {
    if (!this.data.keyword) {
      wx.showToast({
        title: '请输入关键字',
        icon: 'none'
      })
      return
    }
    if (this.data.code == 2) {
      this.getIdiomData()
    } else {
      this.getKeyIdiomData()
    }
  },
  // 根据成语查注释
  getIdiomData () {
    let data = {
      keyword: this.data.keyword,
      showapi_pointCode: this.data.code
    }
    http.getIdiom(data, res => {
      if (res.showapi_res_code != 0) return
      if (res.showapi_res_body.ret_code != 0) {
        this.setData({
          msgData: null,
          errorMsg: res.showapi_res_body.ret_message
        })
        return
      }
      let msgData = res.showapi_res_body.data
      console.log(msgData)
      this.setData({
        msgData
      })
    })
  },
  // 根据关键字查成语
  getKeyIdiomData () {
    let data = {
      keyword: this.data.keyword,
      page: this.data.page,
      rows: this.data.rows,
      showapi_pointCode: this.data.code
    }
    http.getIdiom(data, res => {
      console.log(res)
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