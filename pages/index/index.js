//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    lesson1: 'Lesson 1',
    lesson2: 'Lesson 2',
    lesson3: 'Lesson 3',
    screenWidth : 0,
    screenHeight : 0,
    // userInfo: {},
    // hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  //事件处理函数
  bindViewLessonA: function () {
    wx.navigateTo({
      url: '../lessonA/lessonA'
    })
  },

  onLoad: function () {
    // wx.playBackgroundAudio({
    //   dataUrl: '../resources/music.mp3',
    //   title: '背景音乐',
    //   coverImgUrl: '../resources/ic_launcher.jpg'
    // })

    try {
      var res = wx.getSystemInfoSync()
      // console.log(res.windowWidth)
      // console.log(res.windowHeight)
      screenWidth : res.windowWidth
      screenHeight : res.windowHeight

    } catch (e) {
      // Do something when catch error
      
    }

    lesson3:'hahahha'

    wx.showToast({
      title: 'welcome !',
    })

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
