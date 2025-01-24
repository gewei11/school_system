// 引入模拟数据
import { circleThemes, dynamicCategories, mockDetails } from "../../utils/mockData";

Page({
  data: {
    themes: [], // 一级标题
    categories: [], // 当前一级标题对应的二级标题
    posts: [], // 当前二级标题对应的数据
    currentTheme: "", // 当前选中的一级标题
    currentCategory: "", // 当前选中的二级标题
    selectedThemeIndex: 0, // 当前选中一级标题的索引
    selectedCategoryIndex: 0, // 当前选中二级标题的索引
  },

  onLoad() {
    // 默认加载一级和二级标题及对应数据
    const defaultTheme = "圈子动态"; // 默认一级标题
    const defaultCategory = "树洞"; // 默认二级标题
    this.setData({
      themes: circleThemes,
      categories: dynamicCategories[defaultTheme] || [],
      posts: mockDetails[defaultCategory] || [],
      currentTheme: defaultTheme,
      currentCategory: defaultCategory,
    });
  },

  // 切换一级标题
  changeTheme(e) {
    const theme = e.currentTarget.dataset.theme;
    const themeIndex = e.currentTarget.dataset.index;
    const categories = dynamicCategories[theme] || [];
    const firstCategory = categories.length > 0 ? categories[0].title : "";
    this.setData({
      currentTheme: theme,
      selectedThemeIndex: themeIndex,
      categories: categories,
      currentCategory: firstCategory,
      posts: mockDetails[firstCategory] || [], // 更新帖子
      selectedCategoryIndex: 0, // 重置二级标题选中状态
    });
  },

  // 切换二级标题
  changeCategory(e) {
    const category = e.currentTarget.dataset.category;
    const categoryIndex = e.currentTarget.dataset.index;
    this.setData({
      currentCategory: category,
      selectedCategoryIndex: categoryIndex,
      posts: mockDetails[category] || [], // 更新帖子
    });
  },

  // 跳转到帖子详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?id=${id}`,
    });
  },
});
