// const app = getApp()
Page({
    data: {
        carts: [],             // 购物车列表
        totalPrice: 0,          // 总价，初始为 0
        selectAllStatus: false,   // 全选默认，默认不全选
        goodsSelected: false,
        total: 0
    },
    getTotalPrice() {
        let carts = this.data.carts
        let totalPrice = 0
        let total = 0
        for (let i = 0; i < carts.length; i ++) {
            if (carts[i].goodsSelected) {
                totalPrice += carts[i].goodsItem * carts[i].goodsPrice
                total += carts[i].goodsItem
            }
        }
        this.setData({
            carts: carts,
            totalPrice: totalPrice.toFixed(2),
            total: total
        })
    },
    selectList(e) {
        const index = e.currentTarget.dataset.index
        let carts = this.data.carts
        let goodsSelected = carts[index].goodsSelected
        carts[index].goodsSelected = !goodsSelected
        this.setData({
            goodsSelected: goodsSelected,
            carts: carts
        })
        this.getTotalPrice()
    },
    selectAll() {
        let selectAllStatus = this.data.selectAllStatus
        selectAllStatus = !selectAllStatus
        let carts = this.data.carts

        for (let i = 0; i < carts.length; i ++) {
            carts[i].goodsSelected = selectAllStatus
        }
        this.setData({
            selectAllStatus: selectAllStatus,
            carts: carts
        })
        this.getTotalPrice()
    },
    clear_carts() {
        let that = this
        wx.showModal({
			title: '温馨提示',
			content: '清空购物车后，您将无法找回，是否清空',
			success(res) {
				if (res.confirm) {
                    that.setData({
                        carts: []
                    })
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
    },
    buyAll(){
        wx.navigateTo({
          url: '../chat/chat',
        })
    },
    addCount(e) {
        const index = e.currentTarget.dataset.index
        let carts = this.data.carts
        let goodsItem = carts[index].goodsItem
        goodsItem += 1
        carts[index].goodsItem = goodsItem
        this.setData({
            carts: carts
        })
        this.getTotalPrice()
    },
    minusCount(e) {
        const index = e.currentTarget.dataset.index
        let carts = this.data.carts
        let goodsItem = carts[index].goodsItem
        if (goodsItem <= 1) {
            return false
        }
        goodsItem -= 1
        carts[index].goodsItem = goodsItem
        this.setData({
            carts: carts
        })
        this.getTotalPrice()
    },
    deleteList(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        carts.splice(index,1);              // 删除购物车列表里这个商品
        this.setData({
            carts: carts
        });
        if(!carts.length){                  // 如果购物车为空
            this.setData({
                hasList: false              // 修改标识为false，显示购物车为空页面
            });
        }else{                              // 如果不为空
            this.getTotalPrice();           // 重新计算总价格
        }   
    },
    onLoad: function (options) {
        
    },

    onReady: function () {
        this.getTotalPrice()
    },

    onShow: function () {
        let carts = this.data.carts
        let cache = wx.getStorageSync('carts')
        for (let i = 0; i < cache.length; i ++) {
            carts.push(cache[i])
        }
        this.setData({
            carts: carts
        })
    }
})