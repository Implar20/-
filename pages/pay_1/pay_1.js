Page({
	data: {
		yun: 10.00,
		goods: {
			goodsId: 1, 
			goodsTitle: '三只松鼠-夏至春草240g抹茶零食】超级好吃哦~', 
			goodsPic: 'https://dummyimage.com/600x400/000/fff&text=+', 
			goodsSale: 1000,
			goodsStore: 132,
			goodsItem: 1, 
			goodsPrice: 0.01, 
			goodsSelected: false
		},
		user: {
			name: '张三',
			tel: '11111',
			addr: '湖北省恩施市好又多大厦家电'
		}
	},
	editAddr() {
		wx.navigateTo({
			url: '../address_1/address_1'
		})
	},
	toShop() {
		let that = this
		wx.navigateTo({
			url: '../shop/shop?id=' + that.data.goods.goodsId
		})
	},
	addCount() {
		let num = this.data.goods.goodsItem
		num += 1
		// 由于 无法直接给子对象的值设置
		// 因此需要 将其字符串赋给一个变量
		// 然后再给变量进行赋值
		let goodsItem = 'goods.goodsItem'
		this.setData({
            [goodsItem]: num
        })
	},
	toCar() {
		let that = this
		let goods = that.data.goods
		let carts = wx.getStorageSync('carts') || []
		console.log(carts)
		let has = carts.find(function(e) {
			return e.goodsId === goods.goodsId
		})
		if (has) {
			has.goodsItem += goods.goodsItem
		} else {
			carts.push(goods)
		}
		wx.setStorageSync('carts', carts)

		wx.navigateBack({
			url: '../shop/shop?id=' + goods.goodsId
		})
		wx.request({
			url: 'http://95gtd5loan.51http.tech/biduoduo-0.0.1-SNAPSHOT/saveUserCart',
			method: 'post',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: {"userId":"1","number":"2","goodsId":"3"},
			success(res) {
				console.log(res)
			}
		})
	},
	onLoad(options) {
		let that = this
		let goodsId = 'goods.goodsId'
		that.setData({
			[goodsId]: options.goodsId
		})
	},
	onReady() {

	}
})
