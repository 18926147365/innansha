//logs.js
var app=getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    infomess: '',
    inputContent: {}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  bindChange: function (e) {

    this.data.inputContent[e.currentTarget.id] = e.detail.value
  },
  toMy: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var longitude = res.longitude
        var latitude = res.latitude
        console.log(longitude);
        console.log(latitude);
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(that.data.inputContent.keywork)
        wx.request({
          url: app.globalData.ctx+'/impl/innansha/getMyLocationInfo.do', //仅为示例，并非真实的接口地址
          data: {
            lng: longitude,
            lat: latitude,
            keyWork: '美食'
          },
          header: {
            'content-type': 'application/json'
          },
          type: "POST",
          dataType: "text",
          success: function (res) {
           
            that.setData({
              infomess:res.data
            })
            

          }
        })


      }
    })
  }
})
