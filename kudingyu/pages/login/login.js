// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: "全部"
  },
  bindRegionChange(e){
    this.setData({
      region:e.detail.value
    });
  },
  /* 提交事件 */
formSubmit(e){
  console.log(e);
  wx.showLoading({
    title: '提交中',
    mask:true,
    success:()=>{
      setTimeout(() => {
        wx.hideLoading();
        wx.showToast({
          title: 'success',
          icon:"success",
          duration:1000
        })
        wx.switchTab({
          url: '../../pages/index/index',
        })
      },1500);
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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