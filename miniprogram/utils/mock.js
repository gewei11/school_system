// 模拟消息数据
export function getMockMessages(type) {
  const messages = {
    mutual: [
      {
        id: 1,
        username: "张三",
        avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
        chat: [
          { id: 1, sender: "user", message: "你好，小明！", time: "10:15" },
          { id: 2, sender: "other", message: "你好，有什么事吗？", time: "10:16" },
          { id: 3, sender: "user", message: "最近忙什么呢？", time: "10:17" },
        ],
      },
      {
        id: 2,
        username: "李四",
        avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
        chat: [
          { id: 1, sender: "user", message: "下午一起跑步吗？", time: "14:20" },
          { id: 2, sender: "other", message: "好的，几点？", time: "14:25" },
        ],
      },
    ],
    fans: [
      {
        id: 3,
        username: "王五",
        avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
        chat: [
          { id: 1, sender: "user", message: "你好，我是你的新粉丝！", time: "09:00" },
          { id: 2, sender: "other", message: "谢谢支持！", time: "09:05" },
        ],
      },
      {
        id: 4,
        username: "赵六",
        avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
        chat: [
          { id: 1, sender: "user", message: "你发布的动态很棒！", time: "13:45" },
          { id: 2, sender: "other", message: "非常感谢！", time: "13:50" },
        ],
      },
    ],
  };

  return messages[type] || [];
}

// 模拟聊天数据
export function getMockChatMessages(chatId) {
  const chatMessages = {
    1: [
      { id: 1, sender: "user", message: "你好，小明！", time: "10:15" },
      { id: 2, sender: "other", message: "你好，有什么事吗？", time: "10:16" },
      { id: 3, sender: "user", message: "最近忙什么呢？", time: "10:17" },
    ],
    2: [
      { id: 1, sender: "user", message: "下午一起跑步吗？", time: "14:20" },
      { id: 2, sender: "other", message: "好的，几点？", time: "14:25" },
    ],
    3: [
      { id: 1, sender: "user", message: "你好，我是你的新粉丝！", time: "09:00" },
      { id: 2, sender: "other", message: "谢谢支持！", time: "09:05" },
    ],
    4: [
      { id: 1, sender: "user", message: "你发布的动态很棒！", time: "13:45" },
      { id: 2, sender: "other", message: "非常感谢！", time: "13:50" },
    ],
  };

  return chatMessages[chatId] || [];
}
