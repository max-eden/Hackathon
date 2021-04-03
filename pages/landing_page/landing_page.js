// pages/landing_page/landing_page.js
Page({
  data: {
    Image:[],
    currentUser: null
  },
  onLoad: function (options) {
    let Image = new wx.BaaS.File()
    // Image.get('606825afaef83205fe78f759').then((res) => {
    //   console.log(res)
    //   this.setData({
    //     Image: res.data
    //   })
    //   // success
    // }, err => {
    // // err
    // })
  },

  userInfoHandler: function(data) {
    const self = this
    wx.BaaS.auth.loginWithWechat(data).then((res) => {
      console.log('userInfo', res)
      self.setData({
        currentUser: res
      })
      wx.setStorageSync('userInfo', res)
      getApp().globalData.userInfo = res
    }, (err) => {

    })
    wx.navigateTo({
      url: `/pages/menu-page/menu-page`,
    });
  }

})