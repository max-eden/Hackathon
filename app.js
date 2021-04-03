// app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)
    let clientID = '07e80a10328631011d98'
    wx.BaaS.init(clientID)
    //wx.BaaS.init('07e80a10328631011d98')
    //wx.BaaS.auth.loginWithWechat() // 静默登录
    wx.BaaS.auth.loginWithWechat().then(user => {
      wx.setStorageSync('userInfo', user);
      console.log("current user login", user)
      this.globalData.userInfo = user;
    }, err => {
      console.log("fail login")
    }
      )
  },
  
  globalData: {
    userInfo: wx.getStorageSync('userInfo'),
  }

})

    // 登录


