// pages/menu-page/menu-page.js
Page({

  data: {
    meals: null,
    orders: null
  },

  onLoad: function (options) {
    let meals = new wx.BaaS.TableObject('meals')
  },

})