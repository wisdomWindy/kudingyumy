// pages/video/video.js
import movies from "../../datas/movies.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
      id:0,
      title:"",
  activeIndex:0,
  active:0,
    movies,
    teacher:"酷老师",
    studyNumber:998,
    // 评论信息
    commentList: [{
      name: "刘妈妈",
      icon: "/images/01@2x.png",
      info: "宝宝很喜欢呢"
    },
    {
      name: "彭妈妈",
      icon: "/images/02@2x.png",
      info: "宝宝吵着还要看"
    },
    {
      name: "李妈妈",
      icon: "/images/03@2x.png",
      info: "不给看就哭"
    },
    {
      name: "王妈妈",
      icon: "/images/04@2x.png",
      info: "不给看还哭"
    },
    {
      name: "覃妈妈",
      icon: "/images/goodLesson(1).png",
      info: "宝宝对这个很感兴趣"
    },
    {
      name: "黄爸爸",
      icon: "/images/goodLesson(2).png",
      info: "让宝宝赢在起跑线"
    },
    {
      name: "王爸爸",
      icon: "/images/goodLesson(3).png",
      info: "酷丁鱼是个不错的课堂"
    },
    {
      name: "张妈妈",
      icon: "/images/01@2x.png",
      info: "我谢谢你啊"
    }
  ],
  desc: `这里有各种奇思妙想，
    有疯狂的简笔画，
    会教你用叉子打蝴蝶结，
    各种新奇玩意，
    只要你在生活中发现任何美好的事物，
    我们都能动手制作出来。
    陶艺体验、美味厨艺、创意手工、艺术涂鸦
    等多种不同艺术形式，给孩子留下美好的童年记忆。
    `,
  // 导航信息
  tabs: ["目录", "详情", "评价"],

  },
  /* 点击切换tab栏 */
tabClick(e){
  console.log(e)
  this.setData({
   activeIndex:+e.currentTarget.id
  })
},
/* 点击播放视频 */
clickActive(e){
  console.log(e.currentTarget.id)
  this.setData({
    active:+e.currentTarget.id,
    src:this.data.movies[this.data.active].url
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
    console.log(options)
    this.setData({
      id:options.id,
      title:options.title,
      
    })
     
    }
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
    console.log(this)
    this.setData({
      src:this.data.movies[this.data.active].url
    })
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