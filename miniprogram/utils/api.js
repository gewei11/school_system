const baseUrl = "http://localhost:8080/api";

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}/posts`,
      method: "GET",
      success: (res) => resolve(res.data),
      fail: (err) => reject(err),
    });
  });
};
