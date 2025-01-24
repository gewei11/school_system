// login.js
Page({
    data: {
      // 可以在这里初始化一些数据
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      // 这里可以添加登录逻辑
    },
    register: function() {
      // 跳转到注册页面
      wx.navigateTo({
        url: '/pages/register/register'
      });
    }
  });
  