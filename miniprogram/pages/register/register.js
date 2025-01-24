// register.js
Page({
  data: {
    // 可以在这里初始化一些数据
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    // 这里可以添加注册逻辑，包括校验两次输入的密码是否一致
    const { username, password, confirmPassword, gender, phone, email, address } = e.detail.value;
    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none'
      });
      return;
    }
    
    // 这里可以继续添加其他校验逻辑，如账号、电话、邮箱格式等
    // 然后发送请求到后端进行注册
  }
})
