Page({
    data: {
        address: [
            {
                name: '续航',
                tel: 110,
                addr: {
                    pro: '湖北',
                    city: '恩施',
                    row: '好友多',
                    more: '家电'
                }
            },
            {
                name: '续航',
                tel: 110,
                addr: {
                    pro: '湖北',
                    city: '恩施',
                    row: '好友多',
                    more: '家电'
                }
            }
        ],
        selected: false
    },
    editAddr(e) {
        wx.navigateTo({
            url: '../address_2/address_2'
        })
    },
    delData(e) {
        let that = this
        wx.showModal({
            title: '删除地址',
            content: '是否删除该地址',
            success(res) {
                if (res.confirm) {
                    let address = that.data.address
                    let index = e.currentTarget.dataset.index
                    for (let i = 0; i < address.length; i ++) {
                        if (index == i) {
                            address.splice(i, 1)
                        }
                    }
                    that.setData({
                        address: address
                    })
                } else if (res.cancel) {
                    console.log(123)
                }
            }
        })
        
    }
})