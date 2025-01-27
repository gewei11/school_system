Page({
  data: {
    circleThemes: [], // 一级分类数据
    dynamicCategories: [], // 当前一级分类的二级分类数据
    details: [], // 帖子详情数据
    activeTheme: '', // 当前选中的一级分类
    activeCategory: '', // 当前选中的二级分类
  },

  onLoad() {
    this.fetchCircleThemes(); // 加载一级分类数据
  },

  // 获取一级分类
  fetchCircleThemes() {
    wx.request({
      url: 'http://localhost:3000/api/circleThemes',
      success: (res) => {
        if (res.data.code === 200) {
          const firstTheme = res.data.data[0]; // 默认选中第一个一级分类
          this.setData({
            circleThemes: res.data.data,
            activeTheme: firstTheme?.title, // 设置默认的一级标题
          });
          
          // 获取默认二级分类数据
          this.fetchDynamicCategories(firstTheme?.title);
        }
      },
      fail: (err) => {
        console.error('Request failed', err);
        wx.showToast({ title: '请求一级分类数据失败', icon: 'none' });
      }
    });
  },

  // 获取二级分类
  fetchDynamicCategories(theme) {
    wx.request({
      url: 'http://localhost:3000/api/dynamicCategories',
      data: { theme },
      success: (res) => {
        if (res.data.code === 200) {
          const firstCategory = res.data.data[0]; // 默认选中第一个二级分类
          this.setData({
            dynamicCategories: res.data.data,
            activeCategory: firstCategory?.title, // 设置默认的二级标题
          });
          
          // 获取默认二级分类的帖子详情
          this.fetchDetails(firstCategory?.title);
        }
      },
      fail: (err) => {
        console.error('Request failed', err);
        wx.showToast({ title: '请求二级分类数据失败', icon: 'none' });
      }
    });
  },

  // 获取帖子详情数据
  fetchDetails(category) {
    wx.request({
      url: 'http://localhost:3000/api/mockDetails',
      data: { category },
      success: (res) => {
        console.log('fetchDetails response:', res);
        if (res.data.code === 200) {
          this.setData({
            details: res.data.data,
          });
        }
      },
      fail: (err) => {
        console.error('Request failed', err);
        wx.showToast({ title: '请求帖子详情数据失败', icon: 'none' });
      }
    });
  },

  // 切换一级分类
  switchTheme(e) {
    const theme = e.currentTarget.dataset.theme;
    this.setData({ activeTheme: theme });
    this.fetchDynamicCategories(theme);
  },

  // 切换二级分类
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({ activeCategory: category });
    this.fetchDetails(category);
  },

  // 跳转到详情页
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    const category = this.data.activeCategory;  // 从 data 中获取 activeCategory
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?category=${category}&id=${id}`,
    });
  },
});
