//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pro : [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    mUrl: ''
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  listenSwiper: function(event){
    console.log(this.data.current),
    this.setData({
      mUrl: this.data.pro[event.detail.current].imageUrl
    })
    
  },

  onLoad: function () {
    var that=this;
    wx.request({
  url: app.globalData.ctx+'/impl/innansha/getIndexPage.do', //仅为示例，并非真实的接口地址
  data: {
  },
  header: {
      'content-type': 'application/json'
  },
  dataType:'json',
  method:"GET",
  success: function(res) {
    console.log(res.data.IndexPageList),
    that.setData({
      pro : res.data.IndexPageList,
      mUrl : res.data.IndexPageList[0].imageUrl
    })
  }
})
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
  
})