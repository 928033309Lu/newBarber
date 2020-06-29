// pages/home2/home2.js
import watch from "../../utils/watch"
const App = getApp()
var times = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglistSow: false,
    isShareShow: false,
    dataSrc: [],
    openTime: true
  },
  myComeback () {
    this.setData({
      imglistSow: false
    })
  },
  onOpenImgList () {
    this.setData({
      imglistSow: true
    })
  },
  //内置地图
  onDiTu(){
    let that = this
    wx.showToast({
      title: '地图打开中',
      icon: 'loading',
      duration: 2000
    })
    //获取当前的地理位置、速度
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        // console.log(res)
        // const latitude = res.latitude
        // const longitude = res.longitude

        //选择地图位置
        wx.chooseLocation({
          latitude:"22.798812391493055",
          longitude:"113.57152045355903",
          scale: 18,
          name: "小玉理发店",
          address: "广州市南沙区何仙姑街8号",
          success: (res => {
            console.log(res)
            that.setData({
              xuanlatitude: res.latitude,
              xuanlongitude: res.longitude,
              xuanname:res.name,
              xuanaddress:res.address
            })
            wx.showToast({
              title: '地图打开中',
              icon: 'loading',
              duration: 2000
            })
            //打开地图位置
            wx.openLocation({
              latitude: that.data.xuanlatitude,
              longitude: that.data.xuanlongitude,
              scale: 18,
              name: that.data.xuanname,
              address: that.data.xuanaddress,
              success: (res => {
                // console.log(res)

              })
            })
          })
        })
        
       
      }
    })
  },
  // 跳转小程序
  onMieHome () {
    wx.navigateToMiniProgram({
      appId: 'wx436660de2086dcbd',
      path: 'pages/homepage/homepage',
      success(res) {
        // 打开成功
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  //跳转详情页
  godetails(){
    wx.navigateTo({
      url:"/pages/detail/detail"
    })
  },
  //长按保存图片
  onBaocun: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要保存这张图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.getImageInfo({
            src: '/img/quan.jpg',
            success: function (res) {
              // console.log(res);
              var path = res.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success: function (res) {
                  console.log('图片已保存');
                },
                fail: function (res) {
                  console.log('保存失败');
                }
              })
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onTel () {
    wx.makePhoneCall({
      phoneNumber: '13226669811'
    })
  },
  onShare () {
    this.setData({
      isShareShow: !this.data.isShareShow
    },()=>{
      if (this.data.isShareShow){
        wx.showToast({
          title: '长按保存分享朋友圈',
          icon:"none",
          duration: 2500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    times = setInterval(() => {
      let nowtime = new Date().getHours()
      // console.log(nowtime)
      this.setData({
        openTime: true
      })
      if (nowtime >=22) {
        clearInterval(times)
        this.setData({
          openTime: false
        })
        return 
      }
    },1000)
    this.setData({
      baseImgObj1: App.globalData.baseImg,
      baseImgObj2: App.globalData.baseImg2,
      baseOther: App.globalData.baseOther,
      dataSrc: [
        {
          src: App.globalData.baseImg.img2,
          id: 0
        },
        {
          src: App.globalData.baseImg2.img1,
          id: 1
        },
        {
          src: App.globalData.baseImg.img1,
          id: 2
        },
        {
          src: App.globalData.baseImg2.img2,
          id: 3
        }
      ]
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