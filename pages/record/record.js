Page({
	data: {
		currentTab: 0,
		goods: [
			{
				goodsPic: 'https://dummyimage.com/600x400/b53eb5/fff&text=+',
				goodsTitle: '三只松鼠-夏至春草240g抹茶零食】超级好吃哦~',
				goodsPrice: 59.00,
				goodsLastPrice: 70.00,
				goodsSale: 1000,
				goodsStore: 100,
				goodsTotal: 2
			},
			{
				goodsPic: 'https://dummyimage.com/600x400/b53eb5/fff&text=+',
				goodsTitle: '三只松鼠-夏至春草240g抹茶零食】超级好吃哦~',
				goodsPrice: 59.00,
				goodsLastPrice: 70.00,
				goodsSale: 1000,
				goodsStore: 100,
				goodsTotal: 2
			}
		]
	},
	onLoad: function (options) {
		// 页面初始化 options为页面跳转所带来的参数

	},
	//滑动切换
	swiperTab(e) {
		let that = this;
		that.setData({
			currentTab: e.detail.current
		});
	},
		//点击切换
	clickTab(e) {
		let that = this;
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current
			})
		}
	}
})