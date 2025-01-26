<view>
  <button bindtap="login">登录</button>
</view>
 
// 小程序端登录事件处理函数
Page({
  login: function() {
    wx.login({
      success: function(res) {
        // 获取code
        var code = res.code;
 
        // 发送code到小程序服务端
        wx.request({
          url: 'https://localhost:3000/login',
          data: {
            code: code
          },
          success: function(res) {
            // 获取OpenID和SessionKey
            var openid = res.data.openid;
            var sessionKey = res.data.session_key;
 
            // 将OpenID和SessionKey保存在本地
            wx.setStorageSync('openid', openid);
            wx.setStorageSync('sessionKey', sessionKey);
          },
          fail: function(res) {
            // 处理登录失败情况
            console.log(res);
          }
        });
      }
    });
  }
});