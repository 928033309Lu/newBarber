// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      {
        name: '小玉理发店',
        url: '/pages/home/home',
        icon: 'iconfont icon-lifadian'
      },
      {
        name: '新冠疫情',
        url: '/pages/epidemic/epidemic',
        icon: 'iconfont icon-xinguanyiqing'
      },
      {
        name: '每日壁纸',
        url: '/pages/wallpaper/wallpaper',
        icon: 'iconfont icon-bizhi'
      },
      {
        name: '成语大全',
        url: '/pages/idioms/idioms',
        icon: 'iconfont icon-shu1'
      },
      {
        name: '唐诗三百首',
        url: '/pages/tangshi/tangshi',
        icon: 'iconfont icon-shu1'
      },
    ]
  },
  //跳转应用
  onChangePages(event){
    let item = event.currentTarget.dataset.item
    wx.navigateTo({
      url: item.url
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