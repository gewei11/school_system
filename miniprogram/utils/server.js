const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mockDetails = require("./mockDetails.json");

// 加载环境变量
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// 模拟数据
const circleThemes = [
  { id: 1, title: "圈子动态" },
  { id: 2, title: "二手集市" },
  { id: 3, title: "组局" },
  { id: 4, title: "评分" },
];

const dynamicCategories = {
  "圈子动态": [
    { id: 1, title: "树洞" },
    { id: 2, title: "求助" },
    { id: 3, title: "情感" },
    { id: 4, title: "吐槽" },
    { id: 5, title: "学习" },
    { id: 6, title: "生活" },
  ],
  "二手集市": [
    { id: 7, title: "书籍" },
    { id: 8, title: "数码" },
    { id: 9, title: "日用品" },
    { id: 10, title: "其他" },
  ],
  "组局": [
    { id: 11, title: "拼车" },
    { id: 12, title: "运动" },
    { id: 13, title: "旅行" },
    { id: 14, title: "聚餐" },
  ],
  "评分": [
    { id: 15, title: "课程" },
    { id: 16, title: "老师" },
    { id: 17, title: "食堂" },
    { id: 18, title: "宿舍" },
  ],
};

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
};
  
// 允许跨域
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});  

// 通用响应方法
const sendResponse = (res, code, message, data = null) => {
  res.status(code).json({ code, message, data });
};

// 获取 mutual 或 fans 消息列表
app.get("/api/messages", (req, res) => {
  const { type } = req.query;
  if (!type || !messages[type]) {
    return sendResponse(res, 404, "类型不存在");
  }
  sendResponse(res, 200, "请求成功", messages[type]);
});

// 获取某一聊天的详细消息
app.get("/api/chatMessages", (req, res) => {
  const { chatId } = req.query;
  if (!chatId || !chatMessages[chatId]) {
    return sendResponse(res, 404, "聊天记录不存在");
  }
  sendResponse(res, 200, "请求成功", chatMessages[chatId]);
});

// 获取 circleThemes 一级标签
app.get("/api/circleThemes", (req, res) => {
  sendResponse(res, 200, "请求成功", circleThemes);
});

// 获取 dynamicCategories 二级标签
app.get("/api/dynamicCategories", (req, res) => {
  const { theme } = req.query;
  if (!theme || !dynamicCategories[theme]) {
    return sendResponse(res, 404, "主题不存在");
  }
  sendResponse(res, 200, "请求成功", dynamicCategories[theme]);
});

// 获取 mockDetails 这个标签发布的内容
app.get("/api/mockDetails", (req, res) => {
  const { category } = req.query;
  if (!category || !mockDetails[category]) {
    return sendResponse(res, 404, "类别不存在");
  }
  sendResponse(res, 200, "请求成功", mockDetails[category]);
});

// 获取 mockDetails 发布和评论详细内容
app.get("/api/mockDetail", (req, res) => {
  const { category, id } = req.query;
  if (!category || !mockDetails[category]) {
    return sendResponse(res, 404, "内容不存在");
  }
  const posts = mockDetails[category];
  if (!posts) {
    return res.status(404).json({ message: 'Type not found.' });
  }
  const post = posts.find(p => p.id == id);
  sendResponse(res, 200, "请求成功", post);
})

// 新增内容
app.post("/api/mockDetails", (req, res) => {
  const { category, post } = req.body;
  if (!category || !post) {
    return sendResponse(res, 400, "缺少必要参数");
  }

  const data = readMockDetails();
  if (!data[category]) {
    data[category] = [];
  }

  post.id = Date.now(); // 生成唯一ID
  data[category].push(post);
  writeMockDetails(data);

  sendResponse(res, 201, "新增成功", post);
});

// 更新内容
app.put("/api/mockDetails", (req, res) => {
  const { category, id, updatedPost } = req.body;
  if (!category || !id || !updatedPost) {
    return sendResponse(res, 400, "缺少必要参数");
  }

  const data = readMockDetails();
  const posts = data[category];
  if (!posts) {
    return sendResponse(res, 404, "类别不存在");
  }

  const index = posts.findIndex((p) => p.id == id);
  if (index === -1) {
    return sendResponse(res, 404, "内容不存在");
  }

  data[category][index] = { ...posts[index], ...updatedPost };
  writeMockDetails(data);

  sendResponse(res, 200, "更新成功", data[category][index]);
});

// 删除内容
app.delete("/api/mockDetails", (req, res) => {
  const { category, id } = req.body;
  if (!category || !id) {
    return sendResponse(res, 400, "缺少必要参数");
  }

  const data = readMockDetails();
  const posts = data[category];
  if (!posts) {
    return sendResponse(res, 404, "类别不存在");
  }

  const index = posts.findIndex((p) => p.id == id);
  if (index === -1) {
    return sendResponse(res, 404, "内容不存在");
  }

  const deletedPost = posts.splice(index, 1);
  writeMockDetails(data);

  sendResponse(res, 200, "删除成功", deletedPost[0]);
});

// 启动服务
app.listen(port, () => {
  console.log(`服务器已启动：http://localhost:${port}`);
});