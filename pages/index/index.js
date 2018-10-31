//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540986182892&di=f0681253e838b446a8dd2f3067a334e8&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F14521258306080516329.jpg%3Fid%3D0',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540986472615&di=664ae1fb675357814508db6612460162&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fe850352ac65c1038900c68e6b9119313b07e89a0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540986289118&di=6a67b1838117aa86acb6fca84fc3aa1e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F03%2F20160103144133_xhLZJ.jpeg'
    ],
    orderItems:[
      {
        typeId: 0,
        name: '家政服务',
        url: 'bill',
        imageurl: '/images/index_cargory/家政服务.png',
        },
        {
          typeId: 0,
          name: '接送服务',
          url: 'bill',
          imageurl: '/images/index_cargory/接送.png',
        },
        {
          typeId: 0,
          name: '托管服务',
          url: 'bill',
          imageurl: '/images/index_cargory/少儿.png',
        },
      {
        typeId: 0,
        name: '维修服务',
        url: 'bill',
        imageurl: '/images/index_cargory/维修工人.png',
      },
      {
        typeId: 0,
        name: '搬运',
        url: 'bill',
        imageurl: '/images/index_cargory/搬家.png',
      },
      {
        typeId: 0,
        name: '洗车',
        url: 'bill',
        imageurl: '/images/index_cargory/洗车服务.png',
      },
      {
        typeId: 0,
        name: '个人护理',
        url: 'bill',
        imageurl: '/images/index_cargory/护理液.png',
      },
      {
        typeId: 0,
        name: '干洗',
        url: 'bill',
        imageurl: '/images/state/待付款.png',
      },
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
  inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
