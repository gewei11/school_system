import { getMockMessages } from "../../utils/mock";

Page({
  data: {
    currentTab: "mutual", // 当前选中标签：互关 or 粉丝
    messages: [],         // 消息列表
  },

  onLoad() {
    this.loadMessages(); // 加载消息列表
  },

  // 加载消息列表
  loadMessages() {
    const messages = getMockMessages(this.data.currentTab); // 获取当前标签的消息
    // 处理每条消息，获取最后一条信息
    const processedMessages = messages.map((message) => ({
      ...message,
      lastMessage: message.chat[message.chat.length - 1]?.message || "暂无消息",
      lastTime: message.chat[message.chat.length - 1]?.time || "",
    }));

    this.setData({ messages: processedMessages });
  },

  // 切换标签
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ currentTab: tab }, () => {
      this.loadMessages();
    });
  },

  // 跳转到聊天页面
  goToChat(e) {
    const chatId = e.currentTarget.dataset.chatId; // 获取聊天ID
    wx.navigateTo({
      url: `/pages/chat/chat?chatId=${chatId}`,
    });
  },
});
