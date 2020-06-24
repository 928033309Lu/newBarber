let App = getApp()
Component({
  /**
   * 组件的属性列表
   */
  // 父传子
  properties: {
    china_body: {
      type:Object
    }
  },
  data: {
    scrollHeight: 200,
  },
  ready () {
    this.calculateScrollViewHeight()
  },
  methods: {
    onChangeCity (event) {
      let elem = event.currentTarget.dataset.item
      if (elem.cityList.length) {
        this.data.china_body.todayDetailList = this.data.china_body.todayDetailList.map(item => {
          if (elem.locationId == item.locationId) {
            item.visible = !item.visible
          }
          return item
        })
        this.setData({
          china_body: this.data.china_body
        })
      }
    },
    calculateScrollViewHeight() {
      let that = this;
      let query = wx.createSelectorQuery().in(this)
      query.select('#china-header').boundingClientRect()
      query.select('#china-content').boundingClientRect()
      query.select('#china-details-title').boundingClientRect()
      query.exec((res) => {
        let height1 = res[0].height;
        let height2 = res[1].height;
        let height3 = res[2].height;
        // 然后窗口高度（wx.getSystemInfoSync().windowHeight）减去其他不滑动界面的高度
        let scrollViewHeight = wx.getSystemInfoSync().windowHeight - height1 - height2 - height3;
        // console.log(scrollViewHeight)
        that.setData({
          scrollHeight: scrollViewHeight
        })
      })
    }
  }
 
})