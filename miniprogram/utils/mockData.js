export const circleThemes = [
  { id: 1, title: "圈子动态" },
  { id: 2, title: "二手集市" },
  { id: 3, title: "组局" },
  { id: 4, title: "评分" },
];

export const dynamicCategories = {
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

export const mockDetails = {
  "树洞": [
    {
      id: 1,
      avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
      username: "小龙女",
      content: "爱书的小龙女出一本九成新的考研真题书，价格面议！————圈子动态-树洞",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "张三", comment: "这个书很不错，已私聊！", time: "2025-01-01 16:00" ,likes: 39},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "李四", comment: "价格能不能再便宜点？", time: "2025-01-01 17:00" ,likes: 35},
      ],
      views: 550,
      createdAt: "2025-01-01 15:00",
      likes: 43
    },
    {
      id: 1,
      avatar:"https://img2.baidu.com/it/u=3928639842,338040314&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      username: "郭靖",
      content: "热心的郭靖低价出售小说《三体》系列，有需要的私聊！！————圈子动态-树洞",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "王五", comment: "已收到书，谢谢！", time: "2024-12-29 10:00" ,likes: 51},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "赵六", comment: "三体真的太好看了！", time: "2024-12-29 11:30" ,likes: 56},
      ],
      views: 620,
      createdAt: "2024-12-28 09:30",
      likes: 31
    },
  ],
  "求助": [
    {
      id: 2,
      avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
      username: "小龙女",
      content: "爱书的小龙女出一本九成新的考研真题书，价格面议！————圈子动态-求助",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "张三", comment: "这个书很不错，已私聊！", time: "2025-01-01 16:00" ,likes: 49},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "李四", comment: "价格能不能再便宜点？", time: "2025-01-01 17:00" ,likes: 48},
      ],
      views: 550,
      createdAt: "2025-01-01 15:00",
      likes: 26
    },
    {
      id: 2,
      avatar:"https://img2.baidu.com/it/u=3928639842,338040314&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      username: "郭靖",
      content: "热心的郭靖低价出售小说《三体》系列，有需要的私聊！！————圈子动态-求助",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "王五", comment: "已收到书，谢谢！", time: "2024-12-29 10:00" ,likes: 44},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "赵六", comment: "三体真的太好看了！", time: "2024-12-29 11:30" ,likes: 43},
      ],
      views: 620,
      createdAt: "2024-12-28 09:30",
      likes: 63
    },
  ],
  "书籍": [
    {
      id: 7,
      avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
      username: "小龙女",
      content: "爱书的小龙女出一本九成新的考研真题书，价格面议！————二手集市-书籍",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "张三", comment: "这个书很不错，已私聊！", time: "2025-01-01 16:00" ,likes: 42},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "李四", comment: "价格能不能再便宜点？", time: "2025-01-01 17:00" ,likes: 41},
      ],
      views: 550,
      createdAt: "2025-01-01 15:00",
      likes: 55
    },
    {
      id: 7,
      avatar:"https://img2.baidu.com/it/u=3928639842,338040314&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      username: "郭靖",
      content: "热心的郭靖低价出售小说《三体》系列，有需要的私聊！！————二手集市-书籍",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "王五", comment: "已收到书，谢谢！", time: "2024-12-29 10:00" ,likes: 29},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "赵六", comment: "三体真的太好看了！", time: "2024-12-29 11:30" ,likes: 21},
      ],
      views: 620,
      createdAt: "2024-12-28 09:30",
      likes: 45
    },
  ],
  "运动": [
    {
      id: 12,
      avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
      username: "小龙女",
      content: "爱书的小龙女出一本九成新的考研真题书，价格面议！————组局-运动",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "张三", comment: "这个书很不错，已私聊！", time: "2025-01-01 16:00" ,likes: 63},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "李四", comment: "价格能不能再便宜点？", time: "2025-01-01 17:00" ,likes: 45},
      ],
      views: 550,
      createdAt: "2025-01-01 15:00",
      likes: 65
    },
    {
      id: 12,
      avatar:"https://img2.baidu.com/it/u=3928639842,338040314&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      username: "郭靖",
      content: "热心的郭靖低价出售小说《三体》系列，有需要的私聊！！————组局-运动",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "王五", comment: "已收到书，谢谢！", time: "2024-12-29 10:00" ,likes: 45},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "赵六", comment: "三体真的太好看了！", time: "2024-12-29 11:30" ,likes: 99},
      ],
      views: 620,
      createdAt: "2024-12-28 09:30",
      likes: 28
    },
  ],
  "课程": [
    {
      id: 15,
      avatar: "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665",
      username: "小龙女",
      content: "爱书的小龙女出一本九成新的考研真题书，价格面议！————评分-课程",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "张三", comment: "这个书很不错，已私聊！", time: "2025-01-01 16:00" ,likes: 88},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "李四", comment: "价格能不能再便宜点？", time: "2025-01-01 17:00" ,likes: 77},
      ],
      views: 550,
      createdAt: "2025-01-01 15:00",
      likes: 26
    },
    {
      id: 15,
      avatar:"https://img2.baidu.com/it/u=3928639842,338040314&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      username: "郭靖",
      content: "热心的郭靖低价出售小说《三体》系列，有需要的私聊！！————评分-课程",
      comments: [
        { avatar:"https://img2.baidu.com/it/u=3821905177,3860043633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800", username: "王五", comment: "已收到书，谢谢！", time: "2024-12-29 10:00" ,likes: 26},
        { avatar:"https://img0.baidu.com/it/u=1641379486,3614377436&fm=253&fmt=auto&app=120&f=JPEG?w=503&h=500", username: "赵六", comment: "三体真的太好看了！", time: "2024-12-29 11:30" ,likes: 54},
      ],
      views: 620,
      createdAt: "2024-12-28 09:30",
      likes: 99
    },
  ],
};

export function fetchCircleThemes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(circleThemes);
    }, 1000);
  });
}

export function fetchDynamicCategories(theme) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dynamicCategories[theme] || []);
    }, 1000);
  });
}

export function fetchMockDetails(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDetails[category] || []);
    }, 1500);
  });
}