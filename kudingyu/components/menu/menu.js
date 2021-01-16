// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo(e){
      console.log(e)
      wx.navigateTo({
        url:"../../pages/bindMobile/bindMobile?id="+e.currentTarget.dataset.id,
      })
    }
  }
})
