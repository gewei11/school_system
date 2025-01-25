Page({
  data: {
    circleThemes: [], // 一级分类数据
    dynamicCategories: [], // 当前一级标签选中的二级分类数据
    details: [], // 帖子详情数据
    activeTheme: '', // 当前选中的一级标签
    activeCategory: '', // 当前选中的二级标签
  },

  onLoad() {
    this.fetchCircleThemes(); // 获取一级分类数据
  },

  // 获取一级分类数据
  fetchCircleThemes() {
    wx.request({
      url: 'http://localhost:3000/api/circleThemes',
      success: (res) => {
        if (res.data) {
          this.setData({
            circleThemes: res.data,
            activeTheme: res.data[0]?.title, // 默认选择第一个一级标签
          });
          this.fetchDynamicCategories(res.data[0]?.title); // 根据默认的一级标签获取二级分类
        }
      },
    });
  },

  // 根据一级标签获取二级分类
  fetchDynamicCategories(theme) {
    wx.request({
      url: 'http://localhost:3000/api/dynamicCategories',
      data: { theme },
      success: (res) => {
        if (res.data) {
          this.setData({
            dynamicCategories: res.data,
            activeCategory: res.data[0]?.title, // 默认选择第一个二级标签
          });
          this.fetchDetails(res.data[0]?.title); // 根据默认的二级标签获取帖子详情
        }
      },
    });
  },

  // 根据二级分类获取详情数据
  fetchDetails(category) {
    wx.request({
      url: 'http://localhost:3000/api/mockDetails',
      data: { category },
      success: (res) => {
        if (res.data) {
          this.setData({
            details: res.data,
          });
        }
      },
    });
  },

  // 切换一级分类
  switchTheme(e) {
    const theme = e.currentTarget.dataset.theme;
    this.setData({
      activeTheme: theme,
    });
    this.fetchDynamicCategories(theme); // 获取对应的二级分类
  },

  // 切换二级分类
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      activeCategory: category,
    });
    this.fetchDetails(category); // 获取对应的详情数据
  },

  // 跳转到帖子详情页面
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?id=${id}`,
    });
  },
});
