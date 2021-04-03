// app.js
App({

  onLaunch() {
    wx.BaaS = requirePlugin('sdkPlugin')
    // enables login, payment, and other features
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    const clientID = 'f264e4593a8a382c366e' // The ClientID received by the backend
    wx.BaaS.init(clientID)
    wx.BaaS.auth.anonymousLogin().then(user => {
      console.log(user)
    }).catch(err => {
      // HError
    })
  },
  
  globalData: {
    userInfo: wx.getStorageSync('userInfo'),
  }

})

    // 登录


