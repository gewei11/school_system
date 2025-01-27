Page({
  data: {
    post: {}, // 帖子数据
    comments: [], // 评论列表
    newComment: '', // 新输入的评论
    likedComments: [], // 已点赞的评论索引数组
    likedUsers: [], // 已点赞的用户
  },

  onLoad(options) {
    const { category, id } = options; // 获取跳转时传递的 id
    this.fetchPostDetails(category, id); // 根据 id 获取帖子详情
  },

  // 获取帖子详情
  fetchPostDetails(category, id) {
    wx.request({
      url: `http://localhost:3000/api/mockDetail`,  // 假设这里是获取详情的接口
      data: { category, id },
      success: (res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          this.setData({
            post: res.data.data, // 设置帖子详情数据
            comments: res.data.data.comments, // 设置评论数据
          });
        } else {
          wx.showToast({ title: '获取帖子详情失败', icon: 'none' });
        }
      },
      fail: (err) => {
        console.error('Request failed', err);
        wx.showToast({ title: '请求失败', icon: 'none' });
      },
    });
  },

  // 点赞帖子
  toggleLike() {
    const { liked, likes } = this.data.post;
    const newLikes = liked ? likes - 1 : likes + 1;

    // 模拟用户信息（可以是当前登录用户的唯一标识，如 userId）
    const userId = 'currentUserId';  // 这里假设是当前用户的标识符

    // 判断当前用户是否已经点赞
    if (this.data.likedUsers.includes(userId)) {
      // 如果已经点赞，弹出确认取消点赞的对话框
      wx.showModal({
        title: '取消点赞',
        content: '您是否确定取消点赞此帖子？',
        success: (res) => {
          if (res.confirm) {
            // 用户点击确定，取消点赞
            this.setData({
              'post.liked': false,
              'post.likes': likes - 1,
              likedUsers: this.data.likedUsers.filter(user => user !== userId), // 移除用户点赞记录
            });
            // 弹出取消点赞提示
            wx.showToast({ title: '取消点赞', icon: 'success' });
          }
        },
      });
      return;  // 结束当前函数执行，等待用户确认
    }

    // 如果没有点赞过，执行点赞
    this.setData({
      'post.liked': true,
      'post.likes': newLikes,
      likedUsers: [...this.data.likedUsers, userId], // 添加当前用户的点赞记录
    });

    // 弹出点赞成功提示
    wx.showToast({ title: '点赞成功', icon: 'success' });
  },

  // 用户输入评论
  onCommentInput(e) {
    this.setData({
      newComment: e.detail.value,
    });
  },

  // 提交评论
  submitComment() {
    const { newComment } = this.data;
    if (!newComment.trim()) {
      wx.showToast({ title: '评论不能为空', icon: 'none' });
      return;
    }
    const newCommentItem = {
      avatar: '/path/to/avatar.png', // 假设用户头像
      username: '用户名', // 假设用户名
      comment: newComment,
      time: new Date().toLocaleString(),
      likes: 0,
    };
    this.setData({
      comments: [newCommentItem, ...this.data.comments],
      newComment: '', // 清空评论框
    });
  },

  // 评论点赞
  likeComment(e) {
    const index = e.currentTarget.dataset.index;
    const userId = 'currentUserId';  // 模拟当前用户标识符

    // 判断该评论是否已经点赞
  if (this.data.likedComments.includes(index)) {
    // 已点赞，弹出确认取消点赞的对话框
    wx.showModal({
      title: '取消点赞',
      content: '您是否确定取消点赞此评论？',
      success: (res) => {
        if (res.confirm) {
          // 用户点击确定，取消点赞
          const comment = this.data.comments[index];
          comment.likes -= 1;  // 减少点赞数
          this.setData({
            [`comments[${index}].likes`]: comment.likes,
            likedComments: this.data.likedComments.filter(item => item !== index), // 移除已点赞记录
          });
          // 弹出取消点赞提示
          wx.showToast({ title: '取消点赞', icon: 'success' });
        }
      },
    });
    return;  // 结束当前函数执行，等待用户确认
  }

    // 没有点赞过，执行点赞
    const comment = this.data.comments[index];
    comment.likes += 1;
    
    // 更新点赞数
    this.setData({
      [`comments[${index}].likes`]: comment.likes,
      likedComments: [...this.data.likedComments, index], // 记录已点赞的评论索引
    });
    
    // 弹出点赞成功提示
    wx.showToast({ title: '点赞成功', icon: 'success' });
  },
});
