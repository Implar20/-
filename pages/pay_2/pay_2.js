Page({
	data: {
		user: {
			name: '张三',
			tel: 18464834562,
			addr: {
				pro: '湖北',
				city: '恩施',
				area: '金龙',
				row: '好又多'
			}
		},
		goods: {
				goodsPic: 'https://dummyimage.com/600x400/b53eb5/fff&text=+',
				goodsTitle: '三只松鼠-夏至春草240g抹茶零食超级好吃哦~',
				goodsPrice: 80,
				goodsTotal: 2
		},
		num: 13456879213
	},
	editAddr() {
		wx.navigateTo({
			url: '../address_1/address_1'
		})
	}
})