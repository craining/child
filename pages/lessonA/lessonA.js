Page({

  data: {
    screenWidth:0,
    screenHeight:0
  },

  onLoad: function () {
    var _this = this;
    //获取屏幕宽高 
    wx.getSystemInfo({
      success: function (res) {
        console.log('screenWidth: ' + res.windowWidth)
        _this.setData({
          screenWidth: res.windowWidth,
          screenHeight: res.windowHeight
          
        })
      }
    })

  },

})