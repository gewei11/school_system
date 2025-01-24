import { mockDetails } from "../../utils/mockData";

Page({
  data: {
    post: {}, // 当前帖子详情
    comments: [], // 评论列表
    newComment: "", // 新评论的内容
  },

  onLoad(options) {
    const { id } = options; // 获取传递过来的帖子ID
    const postData = this.getPostById(id); // 根据ID获取帖子详情
    if (postData) {
      this.setData({
        post: postData,
        comments: postData.comments || [],
      });
    } else {
      wx.showToast({
        title: "帖子未找到",
        icon: "none",
      });
    }
  },

  // 根据ID获取帖子详情
  getPostById(id) {
    for (const category in mockDetails) {
      const posts = mockDetails[category];
      const post = posts.find((item) => item.id == id);
      if (post) {
        return post;
      }
    }
    return null;
  },

  // 点赞或取消点赞帖子
  toggleLike() {
    const { post } = this.data;
    const liked = !post.liked; // 切换点赞状态
    const likes = liked ? post.likes + 1 : post.likes - 1; // 更新点赞数

    this.setData({
      "post.liked": liked,
      "post.likes": likes,
    });

    wx.showToast({
      title: liked ? "点赞成功" : "取消点赞",
      icon: "success",
    });
  },

  // 评论点赞功能
  likeComment(e) {
    const { index } = e.currentTarget.dataset; // 获取当前评论的索引
    const comments = this.data.comments;
    const liked = !comments[index].liked; // 切换点赞状态
    const likes = liked ? comments[index].likes + 1 : comments[index].likes - 1; // 更新点赞数

    comments[index].liked = liked;
    comments[index].likes = likes;

    this.setData({
      comments,
    });

    wx.showToast({
      title: liked ? "点赞成功" : "取消点赞",
      icon: "success",
    });
  },

  // 监听评论输入
  onCommentInput(e) {
    this.setData({
      newComment: e.detail.value,
    });
  },

  // 提交评论
  submitComment() {
    const { newComment, comments } = this.data;

    if (!newComment.trim()) {
      wx.showToast({
        title: "评论内容不能为空",
        icon: "none",
      });
      return;
    }

    // 构造新评论对象
    const newCommentObj = {
      avatar: "/assets/default-avatar.png", // 默认头像路径
      username: "匿名用户", // 默认用户名
      comment: newComment,
      time: new Date().toLocaleString(), // 当前时间
      likes: 0, // 初始点赞数
      liked: false, // 是否点赞
    };

    // 更新评论列表
    this.setData({
      comments: [...comments, newCommentObj],
      newComment: "", // 清空输入框
    });

    wx.showToast({
      title: "评论成功",
      icon: "success",
    });
  },
});
