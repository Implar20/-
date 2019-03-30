const app = getApp()
Page({
	data: {
		lig: false,
		int: '300.00',
		sel: true,
		user: {
			user_icon: 'https://dummyimage.com/600x400/000/fff&text=+',
			user_name: 'anonymity',
			user_int: 60.00
		},
		nav: [
			{
				nav_icon: '../../img/my/pay.png',
				nav_title: '待付款',
				width: 52
			},
			{
				nav_icon: '../../img/my/send.png',
				nav_title: '待发货',
				width: 60
			},
			{
				nav_icon: '../../img/my/get.png',
				nav_title: '待收货',
				width: 56
			},
			{
				nav_icon: '../../img/my/after.png',
				nav_title: '人工售后',
				width: 40
			}
		]
	},
	onGotUserInfo: function (e) {
		let that = this
		wx.login({
			success(res) {
				if (res.code) {
					// 发起网络请求
					console.log(res.code)
					that.setData({
						log: true
					})
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			}
		})
		
    console.log("nickname=" + e.detail.userInfo.nickName);
  },
	clickMe() {
		console.log(123)
	},
	order_menu(e) {
		console.log(e.currentTarget.dataset.index)
	},
	dude() {
		wx.navigateTo({
      	url: '../chat/chat',
    })
	},
	showInt() {
		this.setData({
			sel: false
		})
	},
	giveInt() {
		wx.showToast({
			title: '成功',
			icon: 'success',
			duration: 2000
		})
		this.setData({
			sel: true
		})
	},
	cleanCache() {
		wx.showModal({
			title: '清除缓存',
			content: '是否清除缓存',
			success(res) {
				if (res.confirm) {
					console.log('用户点击确定')
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	},
	jumpPage(e) {
		wx.navigateTo({
			url: '../record/record'
		})
	}
})