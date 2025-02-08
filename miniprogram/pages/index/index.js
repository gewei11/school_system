Page({
  data: {
    circleThemes: [],
    dynamicCategories: [],
    details: [],
    activeTheme: '',
    activeCategory: '',
  },

  onLoad() {
    this.fetchCircleThemes();
  },

  fetchCircleThemes() {
    wx.request({
      url: 'http://localhost:3000/api/circleThemes',
      success: (res) => {
        if (res.data.code === 200) {
          const firstTheme = res.data.data[0];
          this.setData({
            circleThemes: res.data.data,
            activeTheme: firstTheme?.title,
          });
          this.fetchDynamicCategories(firstTheme?.title);
        }
      },
      fail: () => wx.showToast({ title: '请求一级分类数据失败', icon: 'none' })
    });
  },

  fetchDynamicCategories(theme) {
    wx.request({
      url: 'http://localhost:3000/api/dynamicCategories',
      data: { theme },
      success: (res) => {
        if (res.data.code === 200) {
          const firstCategory = res.data.data[0];
          this.setData({
            dynamicCategories: res.data.data,
            activeCategory: firstCategory?.title,
          });
          this.fetchDetails(firstCategory?.title);
        }
      },
      fail: () => wx.showToast({ title: '请求二级分类数据失败', icon: 'none' })
    });
  },

  fetchDetails(category) {
    wx.request({
      url: 'http://localhost:3000/api/mockDetails',
      data: { category },
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({ details: res.data.data });
        }
      },
      fail: () => wx.showToast({ title: '请求帖子详情数据失败', icon: 'none' })
    });
  },

  switchTheme(e) {
    const theme = e.currentTarget.dataset.theme;
    this.setData({ activeTheme: theme });
    this.fetchDynamicCategories(theme);
  },

  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({ activeCategory: category });
    this.fetchDetails(category);
  },

  addPost() {
    const category = this.data.activeCategory;
    const newPost = {
      username: '新用户',
      avatar: '/images/default.png',
      content: '这是新发布的帖子内容',
      views: 0,
      likes: 0
    };
    wx.request({
      url: 'http://localhost:3000/api/add/mockDetails',
      method: 'POST',
      data: { category, post: newPost },
      success: () => this.fetchDetails(category),
      fail: () => wx.showToast({ title: '添加帖子失败', icon: 'none' })
    });
  },

  editPost(e) {
    const { id } = e.currentTarget.dataset;
    const category = this.data.activeCategory;
    const updatedPost = { content: '更新后的帖子内容' };
    wx.request({
      url: 'http://localhost:3000/api/put/mockDetails',
      method: 'PUT',
      data: { category, id, updatedPost },
      success: () => this.fetchDetails(category),
      fail: () => wx.showToast({ title: '更新帖子失败', icon: 'none' })
    });
  },

  deletePost(e) {
    const { id } = e.currentTarget.dataset;
    const category = this.data.activeCategory;
    wx.request({
      url: 'http://localhost:3000/api/del/mockDetails',
      method: 'DELETE',
      data: { category, id },
      success: () => this.fetchDetails(category),
      fail: () => wx.showToast({ title: '删除帖子失败', icon: 'none' })
    });
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    const category = this.data.activeCategory;
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?category=${category}&id=${id}`,
    });
  },
});
