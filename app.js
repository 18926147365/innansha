//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.showNavigationBarLoading();
      wx.login({
        success: function (res) {
          that.globalData.code = res.code
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              //查询openId
              wx.request({
                url: that.globalData.ctx + '/impl/innansha/getOpenId.do', //仅为示例，并非真实的接口地址
                data: {
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  code: that.globalData.code
                },
                type: "POST",
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  var data = res.data;
                  that.globalData.openId=data;
                },
                fail: function () {
                  wx.showToast({
                    title: '连接服务器失败',
                    icon: 'loading',
                    duration: 3000
                  })
                  
                },
                complete: function () {
                  wx.hideNavigationBarLoading();
                }

              })

            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    code: '',
    openId: '',
    ctx: "https://www.ocarmon.com"

  }
})