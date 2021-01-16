// pages/home/home.js
import swipers from "../../datas/swipers.js";
import courses from "../../datas/courses.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers,
    courses,
    hotCurses:{
      content:"热门课堂",
      img_url:"../../assets/images/hot.png"
    },
    recommendVideo:{
      content:"推荐视频",
      img_url:"../../assets/images/视频.png"
    },
    more:{
      content:"更多",
      img_url:"../../assets/images/right-arrow.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(swipers)
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