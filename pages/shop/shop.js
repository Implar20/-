Page({
	data: {
		swiper: {
			imgUrls: [
				'https://dummyimage.com/600x400/b53eb5/fff&text=+',
				'https://dummyimage.com/600x400/000000/fff&text=+',
				'https://dummyimage.com/600x400/e33636/fff&text=+'
			]
		},
		test: {
				goodsId: 1,
				goodsPic: 'https://dummyimage.com/600x400/b53eb5/fff&text=+',
				goodsTitle: '三只松鼠-夏至春草240g抹茶零食】超级好吃哦~',
				goodsBla: 123,
				goodsItem: 1,
				goodslastPrice: 321,
				goodsStore: 100,
				goodsPrice: 80,
				goodsSale: 1000
			},
		hidden: 'none'
	},
	onShareAppMessage(){
		return{
			title:"转发给好友",
			imageUrl:"/img/bg.png",
			path:"/pages/index/index"
		}
	},
	show_pic(e) {
		const index = e.currentTarget.dataset.index
		wx.previewImage({
			urls: this.data.swiper.imgUrls,
			current: this.data.swiper.imgUrls[index]
		})
	},
	onReady() {
		wx.setNavigationBarTitle({
			title: '商品详情'
		})
	},
	//添加购物车事件方法
	toCart(e) {
		let that = this
		wx.navigateTo({
			url: '../pay_1/pay_1?goodsId=' + that.data.test.goodsId
		})
	},
	onLoad(options) {
		let that = this
		let goodsId = 'test.goodsId'
		that.setData({
			[goodsId]: options.goodsId
		})
	}
})