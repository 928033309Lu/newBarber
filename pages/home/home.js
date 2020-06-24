// pages/home/home.js
import watch from "../../utils/watch"
const App = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    isFenShow:false,
    isloading:true,
    col:"rgba(0, 0, 0, 0.1)",
    ind:"",
    num:0,
    dataSrc: []
  },
  //进入小程序
  goChange(){
    this.setData({
      isloading: !this.data.isloading
    })
  },

  //打开分享图
  youquanOpen(){
    this.setData({
      isFenShow: !this.data.isFenShow
    },()=>{
      if (this.data.isFenShow){
        wx.showToast({
          title: '长按保存分享朋友圈',
          icon:"none",
          duration: 2500
        })
      }
    })
  },
 //长按保存图片
  baocun: function (e) {
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
  //点击调用电话
  onTel() {
    wx.makePhoneCall({
      phoneNumber: '13226669811'
    })
  },
  //内置地图
  onTu(){
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
            // console.log(res.latitude, res.longitude)
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
  imgYu(event){
    let id = event.currentTarget.dataset.id
    this.setData({
      ind : id
    })
    this.setData({
      isShow: !this.data.isShow,
      num:0
    })
  },
  //关闭遮罩
  zhezhao(){
    this.setData({
      isShow: !this.data.isShow,
      num:0
    })
  },
  //加
  jia(){
    this.setData({
      num : this.data.num+=10
    })
  },
  //减
  jian() {
    this.setData({
      num: this.data.num -= 10
    })
  },
  //跳转详情页
  godetails(){
    wx.navigateTo({
      url:"/pages/detail/detail"
    })
  },
  // 返回首页
  onComeBack () {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
    // console.log(this.data)
    let that = this;
    var bbb;
    bbb = setInterval(() => {
      var rgba1 = 'rgba(' + Math.floor(Math.random() * 255) + ','
        + Math.floor(Math.random() * 255) + ','
        + Math.floor(Math.random() * 255) + ',0.3)';
      // console.log(rgba1);

      that.setData({
        col: rgba1
      })
    }, 800)
    watch(this, {
      isFenShow: function (val) {
        // console.log(val)
        if(val){
          clearInterval(bbb)

        }else{
          
          bbb = setInterval(() => {
            var rgba1 = 'rgba(' + Math.floor(Math.random() * 255) + ','
              + Math.floor(Math.random() * 255) + ','
              + Math.floor(Math.random() * 255) + ',0.3)';
            // console.log(rgba1);

            that.setData({
              col: rgba1
            })
          }, 800)
        }
        
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '小玉理发店'
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