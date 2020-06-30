let App = getApp()
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		
	},
	data: {
		redPacketVisible: false,
		festival: ''
	},
	ready () {
		this.init()
	},
	methods: {
		onSale () {
			this.setData({
				redPacketVisible: false
			})
			wx.navigateTo({
				url:"/pages/youhui/youhui?data=" + this.data.festival
			})
		},
		onCloseBar () {
			this.setData({
				redPacketVisible: false
			})
		},
    init () {
			let date = new Date()
			let fullYear = date.getFullYear()
			let month = date.getMonth() + 1
			let strDate = date.getDate()
			this.checkFestival(fullYear, month, strDate)
		},
		// 判断节日
		checkFestival (fullYear, month, strDate) {
			// 建党节  七夕节  教师节  国庆节 
			console.log(fullYear, month, strDate)
			if (fullYear == 2020 && month == 7 && strDate == 1) {
				this.setData({
					redPacketVisible: true,
					festival: '建党节'
				})
			}
			if (fullYear == 2020 && month == 8 && strDate == 25) {
				this.setData({
					redPacketVisible: true,
					festival: '七夕节'
				})
			}
			if (fullYear == 2020 && month == 10 && strDate >= 1 && strDate <= 8) {
				this.setData({
					redPacketVisible: true,
					festival: '国庆节'
				})
			}

		},

	}
})
