// miniprogram/pages/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      [
        '../../images/shangpin1.jpg',
        '各种方便面',
        '5.00',
        0,
      ],
      [
        '../../images/shangpin2.jpg',
        '各种矿泉水',
        '2.00',
        1,
      ],
      [
        '../../images/shangpin3.jpg',
        '各种面包',
        '4.00-10.00',
        2,
      ],
      // '../../images/shangpin3.jpg'
    ],
    id: 0,
  },
  gotoDetail: function(e) {
    var value = e.currentTarget.dataset.lockerid;
    wx.navigateTo({
      url: '../detail/detail?id='+value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
    });
    console.log(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})