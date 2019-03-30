Page({
	data: {
		swiper: {
			imgUrls: [
				{
					Id: 1,
					Pic: 'https://dummyimage.com/600x400/b53eb5/fff&text=+'
				},
				{
					Id: 2,
					Pic: 'https://dummyimage.com/600x400/61b33e/fff&text=+'
				},
				{
					Id: 3,
					Pic: 'https://dummyimage.com/600x400/e33636/fff&text=+'
				}
			]
		},
		indicatorDots: false,
		interval: 5000,
		duration: 1000,
		nav: {
			list: [
				{
					src: '../../img/index/分组_特.png',
					name: '土特产'
				},
				{
					src: '../../img/index/分组_茶.png',
					name: '茶品'
				},
				{
					src: '../../img/index/分组_烟.png',
					name: '香烟'
				},
				{
					src: '../../img/index/分组_酒.png',
					name: '美酒'
				}
			]
		},
		list_now: {},
		list_menu:{}
	},
	search() {
		wx.navigateTo({
			url: '../search/search',
		})
	},
	click_swiper(e) {
		let index = e.currentTarget.dataset.index
		wx.navigateTo({
			url: '../shop/shop?goodsId=' + index,
		})
	},
	list_request(e) {
		let that = this
		if (e.currentTarget.dataset.item == 1) {
			that.setData({
				list_now: that.data.list_menu[0].goodslist
			})
		} else if (e.currentTarget.dataset.item == 2) {
			that.setData({
				list_now: that.data.list_menu[1].goodslist
			})
		} else if (e.currentTarget.dataset.item == 3) {
			that.setData({
				list_now: that.data.list_menu[2].goodslist
			})
		} else {
			that.setData({
				list_now: that.data.list_menu[3].goodslist
			})
		}
	},
	onLoad: function (options) {	
		let that = this
		wx.request({
			url: 'http://95gtd5loan.51http.tech/biduoduo-0.0.1-SNAPSHOT/gethostgoods',
			success(res) {
				that.setData({
					list_now: res.data[1].goodslist,
					list_menu: res.data
				})
				console.log(res.data)
				console.log(that.data.list_now)
			}
		})
		// wx.request({
		// 	url: '',
		// 	success(res) {
		// 		that.setData({
		// 			swiper: res.data
		// 		})
		// 	}
		// })
	},
	onReady: function () {

	},
	onShow: function () {

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

