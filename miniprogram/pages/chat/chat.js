import { getMockChatMessages } from "../../utils/mock";

Page({
  data: {
    chatId: null, // 聊天 ID
    messages: [], // 聊天记录
    inputValue: "", // 输入框内容
  },

  onLoad(options) {
    const { chatId } = options; // 获取聊天 ID
    const messages = getMockChatMessages(chatId); // 获取模拟聊天数据
    this.setData({ chatId, messages });
  },

  // 处理输入框内容
  handleInput(e) {
    this.setData({ inputValue: e.detail.value });
  },

  // 发送消息
  sendMessage() {
    const { inputValue, messages } = this.data;

    if (!inputValue.trim()) {
      wx.showToast({
        title: "消息不能为空",
        icon: "none",
      });
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      message: inputValue,
      time: this.getCurrentTime(),
    };

    // 更新消息列表并清空输入框
    this.setData({
      messages: [...messages, newMessage],
      inputValue: "",
    });

    // 模拟对方回复
    this.simulateReply();
  },

  // 模拟对方回复
  simulateReply() {
    const { messages } = this.data;

    setTimeout(() => {
      const replyMessage = {
        id: messages.length + 1,
        sender: "other",
        message: "好的，我知道了！",
        time: this.getCurrentTime(),
      };

      this.setData({
        messages: [...messages, replyMessage],
      });
    }, 1000); // 模拟 1 秒延迟
  },

  // 获取当前时间
  getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
  },
});
