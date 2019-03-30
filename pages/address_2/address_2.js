Page({
	data: {
		sel: {
			pro: [
				'湖北',
				'湖南',
				'四川',
				'广西'
			],
			city: [
				''
			]
		}
	},
	save() {
		wx.navigateBack({
			url: '../address_1/address_1'
		})
	}
})