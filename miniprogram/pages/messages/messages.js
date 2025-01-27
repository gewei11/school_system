Page({
  data: {
    currentTab: 'mutual',  // 默认显示互关私信消息
    messages: [],  // 消息列表
  },

  // 页面加载时，获取初始消息
  onLoad() {
    this.fetchMessages();  // 获取消息数据
  },

  // 获取消息列表
  fetchMessages() {
    wx.request({
      url: 'http://localhost:3000/api/messages',
      data: { type: this.data.currentTab }, // 传递当前选中的标签类型
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({ messages: res.data.data });
        } else {
          wx.showToast({ title: '消息加载失败', icon: 'none' });
        }
      },
      fail: (err) => {
        console.error('Request failed', err);
        wx.showToast({ title: '请求失败', icon: 'none' });
      },
    });
  },

  // 切换标签
  switchTab(e) {
    const selectedTab = e.currentTarget.dataset.tab;  // 获取点击的标签类型
    if (this.data.currentTab !== selectedTab) {
      this.setData({ currentTab: selectedTab }, () => {
        this.fetchMessages();  // 切换标签后重新加载消息
      });
    }
  },

  // 跳转到聊天页面
  goToChat(e) {
    const chatId = e.currentTarget.dataset.chatId;
    wx.navigateTo({
      url: `/pages/chat/chat?id=${chatId}`,
    });
  },
});
