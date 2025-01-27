Page({
  data: {
    chatId: '', // 聊天 ID
    messages: [], // 聊天记录
    inputValue: '', // 输入框内容
  },

  onLoad(options) {
    const id = options.id; // 从 URL 获取聊天 ID
    this.setData({ chatId: id });
    this.fetchChatMessages(id);
  },

  // 获取聊天记录
  fetchChatMessages(id) {
    wx.request({
      url: 'http://localhost:3000/api/chatMessages',
      data: { chatId: id },
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({ messages: res.data.data });
        }
      },
    });
  },

  // 发送消息
  sendMessage() {
    if (!this.data.inputValue.trim()) return;

    const newMessage = {
      sender: 'user',
      message: this.data.inputValue,
      time: new Date().toLocaleTimeString(),
    };

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '',
    });

    // 模拟发送到服务端
    setTimeout(() => {
      this.setData({
        messages: [...this.data.messages, newMessage, { sender: 'other', message: '收到！', time: new Date().toLocaleTimeString() }],
      });
    }, 500);
  },

  // 输入框绑定
  bindInput(e) {
    this.setData({ inputValue: e.detail.value });
  },
});
