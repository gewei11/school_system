const express = require("express");
const app = express();
const port = 3000;

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

const mockDetails = {
  // 添加你的 mockDetails 数据（保持内容一致）
  ...require("./mockDetails.json"), // 从外部 JSON 文件加载更方便
};

// 允许跨域
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 获取 circleThemes 一级标签
app.get("/api/circleThemes", (req, res) => {
  res.json(circleThemes);
});

// 获取 dynamicCategories 二级标签
app.get("/api/dynamicCategories", (req, res) => {
  const theme = req.query.theme;
  if (dynamicCategories[theme]) {
    res.json(dynamicCategories[theme]);
  } else {
    res.status(404).json({ message: "主题不存在" });
  }
});

// 获取 mockDetails 发布和评论详细内容
app.get("/api/mockDetails", (req, res) => {
  const category = req.query.category;
  if (mockDetails[category]) {
    res.json(mockDetails[category]);
  } else {
    res.status(404).json({ message: "类别不存在" });
  }
});

// 启动服务
app.listen(port, () => {
  console.log(`服务器已启动：http://localhost:${port}`);
});
