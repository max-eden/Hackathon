// pages/menu-page/menu-page.js
Page({
  data: {
    meals: [],
    orders: [],
    orderPrice: 0
  },

  onLoad () {
    const self = this
    let meals = new wx.BaaS.TableObject('meals')
    meals.find().then(res => {
      console.log('meals', res),
      self.setData({
        meals: res.data.objects
      })
    })
  },
  submitOrder: function(e) {
    let orders = new wx.BaaS.TableObject('orders')
    console.log(e)
    let newOrder = orders.create()
    newOrder.set({
      meal_id: e.currentTarget.dataset.mealid,
      count: 1
    })

    newOrder.save().then((res) => {
      console.log('new order', res)
      wx.showToast({
        title: 'Ordered!',
      })
    })

    let newMealPrice = e.currentTarget.dataset.mealprice
    this.setData ({
      orderPrice: this.data.orderPrice + newMealPrice
    })
  },
  navigateToConfirmation: function() {
    wx.navigateTo({
      url: 'pages/confirmation/confirmation',
    })
  }

})