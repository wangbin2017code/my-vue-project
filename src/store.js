const STORE_ITEM_KEY = 'todovuejs'
export default {
  // 获取数据
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORE_ITEM_KEY) || '[]')
  },

  // 存储数据
  save (items) {
    window.localStorage.setItem(STORE_ITEM_KEY, JSON.stringify(items))
  }
}
