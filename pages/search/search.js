Page({
	data: {
		has: false,
		search_item: ['资深堂'],
		inputVal: '',
		hasData: false,
		list_now: [1,1,1],
		focused: true
	},
	cancel(e) {
		let that = this
		if (that.data.has) {
			let value = that.data.inputVal
			let search_item = that.data.search_item
			search_item.unshift(value)
			wx.setStorageSync('search_item', search_item)
			search_item = wx.getStorageSync('search_item')
			wx.request({
				url: '',
				method: 'post',
				success(res) {
					that.setData({
						hasData: true,
						list_now: res.data
					})
				}
			})
		} else {
			wx.switchTab({
				url: '../index/index'
			})
		}
	},
	inputI(e) {
		if (e.detail.value) {
			this.setData({
				inputVal: e.detail.value,
				has: true
			})
		} else {
			this.setData({
				has: false
			})
		}
	},
	inputC(e) {
		let that = this
		let search_item = that.data.search_item
		let value = e.detail.value
		// 忽略空格 或 空
		if (value && !(/\s/g.test(value))) {
			search_item.unshift(value)
			wx.setStorageSync('search_item', search_item)
			that.setData({
				search_item: search_item
			})
			wx.request({
				url: '',
				method: 'post',
				success(res) {
					that.setData({
						hasData: true,
						list_now: res.data
					})
				}
			})
		}
	},
	search() {
		wx.navigateTo({
			url: '../search/search'
		})
	},
	onLoad: function (options) {
		
	},
	onReady: function () {
	
	},
	onShow: function () {
		let search_item = wx.getStorageSync('search_item')
		this.setData({
			search_item: search_item
		})
	},
	onHide: function () {
	
	},
	onUnload: function () {
	
	},
	onPullDownRefresh: function () {
	
	},
	onReachBottom: function () {
	
	},
	onShareAppMessage: function () {
	
	}
})